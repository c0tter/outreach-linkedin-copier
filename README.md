🔍 What This Extension Does
This Chrome extension enhances Outreach by automatically extracting key contact details from a profile page. It helps when Outreach’s built-in LinkedIn matcher fails to correctly identify or match LinkedIn profiles.

✨ Why It Exists
Outreach doesn’t always surface accurate LinkedIn matches. This extension fills that gap by pulling reliable information from the visible page content, so users can quickly access and copy:

Name (from the contact header)

Company name (parsed from the contact's email domain)

LinkedIn (as a static label to aid manual lookup)

💡 What It Outputs
On any Outreach contact page, it displays a floating popup like this:

css
Copy
Edit
[Name], [Company], LinkedIn
Along with a Copy button to easily transfer the line into LinkedIn or other tools.

⚙️ How It Works
Waits for the email address to appear

Extracts the domain from the email (e.g., @example.com → Example)

Combines it with the visible name and adds "LinkedIn"

Shows the result in a small overlay with a one-click copy button

🛠️ Credit
This lightweight extension was created to streamline Outreach workflows and improve contact identification when automated matchers fall short.
