
➡️ Includes a **Copy** button to easily transfer the line into LinkedIn or other workflows.

---

## ⚙️ How It Works

- Waits for the email address to appear in the DOM
- Extracts the domain from the email (e.g., `@example.com` → `Example`)
- Combines it with the visible name and appends `"LinkedIn"`
- Displays a compact overlay with the full string and a one-click copy button

---

## 🛠️ Credit

This extension was created to streamline Outreach workflows and improve contact identification when automated matchers fall short.

---

## 📦 Installation (Developer Mode)

1. Clone or download this repo.
2. Go to `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the extension folder.

---

## 🧪 Compatibility

- Designed for use on `https://*.outreach.io/*` pages.
- Works with dynamic content — includes logic to wait for email field to appear before extracting data.

---

## 📄 License

MIT
