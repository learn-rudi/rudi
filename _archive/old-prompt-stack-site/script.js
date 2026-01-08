/**
 * Prompt Stack Landing Page Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks) {
          navLinks.classList.remove('active');
          mobileMenuBtn?.classList.remove('active');
        }
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.step-card, .stack-card, .model-card, .faq-item, .comparison-col'
  );

  animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // Nav background on scroll
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Typing animation for terminal demo
  const terminalLines = document.querySelectorAll('.terminal-line.output');

  if (terminalLines.length > 0) {
    const terminalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateTerminal();
          terminalObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
      terminalObserver.observe(terminalWindow);
    }
  }

  function animateTerminal() {
    terminalLines.forEach((line, index) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(10px)';

      setTimeout(() => {
        line.style.transition = 'opacity 0.3s, transform 0.3s';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 500 + (index * 400));
    });
  }

  // Workflow chat demo
  const workflows = {
    email: [
      { type: 'user', text: 'Check my Gmail every hour. Draft responses to anything that needs a reply. Send me a Slack with everything I need to approve.' },
      { type: 'ai', text: 'I\'ll set that up for you. Connecting to your integrations...', checklist: ['Gmail connected', 'Response drafting ready', 'Slack integration active', 'Scheduled: every hour'] },
      { type: 'ai', text: 'Running first check now...' },
      { type: 'ai', text: '<span class="log-time">10:00</span> Found 3 new emails<br><span class="log-time">10:01</span> Drafted 2 responses<br><span class="log-time">10:02</span> Sent summary to Slack', isLog: true },
      { type: 'ai', text: '✓ Done. You\'ll get a Slack message every hour with drafts to approve.', isSuccess: true }
    ],
    research: [
      { type: 'user', text: 'I have 100 articles saved in ~/research/ai-papers. Summarize each one, find common themes, and draft a blog post.' },
      { type: 'ai', text: 'I\'ll process those articles for you...', checklist: ['Found 100 PDFs in ~/research/ai-papers', 'Extracting text from each', 'Analyzing themes', 'Drafting blog post'] },
      { type: 'ai', text: 'Processing articles...' },
      { type: 'ai', text: '<span class="log-time">00:15</span> 100/100 articles summarized<br><span class="log-time">00:18</span> Found 5 major themes<br><span class="log-time">00:22</span> Blog draft created', isLog: true },
      { type: 'ai', text: '✓ Done. Blog post saved to ~/research/blog-draft.md with citations.', isSuccess: true }
    ],
    invoices: [
      { type: 'user', text: 'Watch my Downloads folder. When new invoices come in, extract the vendor, amount, and date. Add them to my Google Sheet.' },
      { type: 'ai', text: 'Setting up the automation...', checklist: ['Watching ~/Downloads', 'Invoice parser ready', 'Google Sheets connected', 'Running on file change'] },
      { type: 'ai', text: 'Found 3 invoices to process...' },
      { type: 'ai', text: '<span class="log-time">→</span> Acme Corp - $1,250.00 - Jan 15<br><span class="log-time">→</span> CloudHost - $89.00 - Jan 14<br><span class="log-time">→</span> Design Co - $500.00 - Jan 12', isLog: true },
      { type: 'ai', text: '✓ Done. 3 invoices added to your "2024 Expenses" sheet.', isSuccess: true }
    ],
    videos: [
      { type: 'user', text: 'I have 200 TikTok URLs in a file. Get transcripts from each, categorize by topic, and create organized research notes.' },
      { type: 'ai', text: 'I\'ll process those videos...', checklist: ['Loaded 200 URLs from file', 'TikTok transcript extractor ready', 'Topic classifier ready', 'Notes template ready'] },
      { type: 'ai', text: 'Extracting transcripts...' },
      { type: 'ai', text: '<span class="log-time">02:30</span> 200/200 transcripts extracted<br><span class="log-time">02:45</span> Categorized: Marketing (82), Product (65), Culture (53)<br><span class="log-time">02:48</span> Notes organized by topic', isLog: true },
      { type: 'ai', text: '✓ Done. Research notes saved to ~/research/tiktok-notes/ with 3 category folders.', isSuccess: true }
    ]
  };

  const chatBody = document.getElementById('chat-body');
  const workflowBtns = document.querySelectorAll('.workflow-btn');
  let currentAnimation = null;

  function streamWorkflow(workflowId) {
    // Cancel any running animation
    if (currentAnimation) {
      clearTimeout(currentAnimation);
    }

    const messages = workflows[workflowId];
    if (!messages || !chatBody) return;

    // Clear chat
    chatBody.innerHTML = '';

    let delay = 0;
    const baseDelay = 200;

    messages.forEach((msg, msgIndex) => {
      currentAnimation = setTimeout(() => {
        const div = document.createElement('div');
        div.className = `chat-msg ${msg.type}${msg.isLog ? ' log' : ''}${msg.isSuccess ? ' success' : ''}`;

        let content = msg.text;

        if (msg.checklist) {
          content += '<div class="ai-checklist">';
          msg.checklist.forEach((item, i) => {
            content += `<div class="check-item done" style="opacity:0;animation:chatFadeIn 0.3s ease forwards;animation-delay:${i * 0.2}s"><span class="check">✓</span> ${item}</div>`;
          });
          content += '</div>';
        }

        div.innerHTML = content;
        div.style.opacity = '0';
        div.style.animation = 'chatFadeIn 0.4s ease forwards';

        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, delay);

      // Calculate delay for next message
      delay += baseDelay + 400;
      if (msg.checklist) {
        delay += msg.checklist.length * 200 + 200;
      }
      if (msg.isLog) {
        delay += 300;
      }
    });
  }

  // Handle workflow button clicks
  workflowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      workflowBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      streamWorkflow(btn.dataset.workflow);
    });
  });

  // Auto-start first workflow when section comes into view
  const chatSection = document.querySelector('.in-action-section');
  if (chatSection) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          streamWorkflow('email');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    sectionObserver.observe(chatSection);
  }

  // Preview window tilt on mouse move
  const previewWindow = document.querySelector('.preview-window');

  if (previewWindow) {
    const heroPreview = document.querySelector('.hero-preview');

    heroPreview?.addEventListener('mousemove', (e) => {
      const rect = heroPreview.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 50;
      const rotateY = (centerX - x) / 50;

      previewWindow.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroPreview?.addEventListener('mouseleave', () => {
      previewWindow.style.transform = 'rotateX(2deg) rotateY(0deg)';
    });
  }

  

  // Console easter egg
  console.log(`
  ⚡ Prompt Stack
  ─────────────────────
  Vibe code on your own computer.

  Interested in how this works?
  Check out: https://github.com/prompt-stack
  `);
});

// Download button tracking (placeholder for analytics)
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Track download clicks
    console.log('Download clicked');

    // Add visual feedback
    btn.style.transform = 'scale(0.98)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 150);
  });
});
