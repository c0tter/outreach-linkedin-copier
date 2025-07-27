
console.log("🧠 Outreach Smart Contact Extractor Initialized");

function extractContactBoxData() {
  const nameEl = document.querySelector('h6.MuiTypography-h6');
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (!nameEl || !emailLink) return null;

  const name = nameEl.textContent?.trim() || "Unknown";
  const email = emailLink.textContent || "";
  const domainPart = email.split("@")[1]?.split(".")[0] || "";
  const company = domainPart.charAt(0).toUpperCase() + domainPart.slice(1);

  const linkedin = "LinkedIn";  // Static label
  const combined = `${name}, ${company}, ${linkedin}`;

  return { combined };
}

function createOrUpdateHelper({ combined }) {
  let div = document.querySelector('#smart-company-helper');

  if (!div) {
    div = document.createElement('div');
    div.id = 'smart-company-helper';
    document.body.appendChild(div);
  }

  div.innerHTML = `
    <div><strong>💡 Contact:</strong></div>
    <div>${combined}</div>
    <button id="copy-contact-btn">Copy</button>
  `;

  document.getElementById('copy-contact-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(combined);
    document.getElementById('copy-contact-btn').innerText = "Copied!";
  });

  console.log("🟢 Extracted:", combined);
}

function waitForEmailAndSuggest(attempts = 0) {
  const emailExists = document.querySelector('a[href^="mailto:"]');
  if (emailExists) {
    const contactInfo = extractContactBoxData();
    if (contactInfo) createOrUpdateHelper(contactInfo);
  } else if (attempts < 10) {
    console.log(`⏳ Waiting for email... (${attempts + 1})`);
    setTimeout(() => waitForEmailAndSuggest(attempts + 1), 500);
  } else {
    console.warn("❌ Gave up waiting for email.");
  }
}

function setupObserver() {
  let lastName = "";

  const observer = new MutationObserver(() => {
    const nameEl = document.querySelector('h6.MuiTypography-h6');
    const currentName = nameEl?.textContent || '';

    if (currentName !== lastName) {
      lastName = currentName;
      waitForEmailAndSuggest();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  waitForEmailAndSuggest();
}

setupObserver();
