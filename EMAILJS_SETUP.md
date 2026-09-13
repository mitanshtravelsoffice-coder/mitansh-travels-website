# EmailJS Setup Guide

This guide will help you set up EmailJS for the booking and contact forms in your travel website.

## What is EmailJS?

EmailJS is a client-side service that allows sending emails directly from the browser without a backend server. It uses templates to send emails securely without exposing your email credentials.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click on "Sign Up" or "Sign In"
3. Create a free account (the free tier allows up to 200 emails per month)
4. Verify your email address

## Step 2: Create an Email Service

1. After logging in, go to the "Email Services" section (left sidebar)
2. Click "Add New Service" button
3. Select your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Custom SMTP

### How to Connect Gmail:

1. Select "Gmail" from the service list
2. Enable 2-factor authentication on your Google Account if not already enabled
3. Go to Google Account → Security → 2-Step Verification
4. Click "App passwords"
5. Generate a new App Password (name it "EmailJS")
6. Copy the generated App Password
7. Paste it in the EmailJS Gmail connection form
8. Click "Connect Service"
9. **Copy the Service ID** (displayed after successful connection)

### Where to Copy the Service ID:
- After connecting the service, you'll see a Service ID (e.g., "service_xxxxxxxxx")
- Copy this ID - you'll need it for the `.env.local` file

## Step 3: Create an Email Template

1. Go to the "Email Templates" section (left sidebar)
2. Click "Create New Template" button
3. Name your template (e.g., "Travel Website Forms")
4. In the template editor, use these exact variables:

### Required Template Variables:

```
Subject: {{subject}}

From: {{name}}
Email: {{email}}
Phone: {{phone}}

{{#if pickup}}
Pickup Location: {{pickup}}
Drop Location: {{drop}}
Travel Date: {{date}}
Pickup Time: {{time}}
Vehicle Type: {{vehicle}}
Number of Passengers: {{passengers}}
{{/if}}

Message: {{message}}
```

5. Click "Save"
6. **Copy the Template ID** (displayed after saving)

### Where to Copy the Template ID:
- After saving the template, you'll see a Template ID (e.g., "template_xxxxxxxxx")
- Copy this ID - you'll need it for the `.env.local` file

## Step 4: Get Your Public Key

1. Click on your account name/profile picture (top right)
2. Go to "Account" or "API Keys" section
3. Copy your **Public Key** (also called Public Key or API Key)

### Where to Copy the Public Key:
- The Public Key is displayed in the API Keys section
- Copy this key - you'll need it for the `.env.local` file

## Step 5: Create .env.local File

Create a file named `.env.local` in your project root (same level as package.json) with these exact values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

Replace the placeholder values with:
- `service_xxxxxxxxx` → The Service ID from Step 2
- `template_xxxxxxxxx` → The Template ID from Step 3
- `xxxxxxxxxxxxxxxxxxxxxxxx` → The Public Key from Step 4

**Important:**
- Do NOT include quotes around the values
- Do NOT add extra spaces around the equals sign
- The file must be named exactly `.env.local` (with the dot at the beginning)

## Step 6: Restart Your Development Server

After creating the `.env.local` file, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then start it again
npm run dev
```

## Step 7: Test the Forms

1. Open your website in the browser
2. Fill out the booking form or contact form
3. Submit the form
4. Check your email to verify the email was sent successfully

## Troubleshooting

### "EmailJS configuration is missing" message:
- This means one or more environment variables are not set
- Check that `.env.local` exists in the project root
- Verify the variable names match exactly (case-sensitive)
- Restart the development server after adding variables
- Check the browser console for the warning message

### Email not sending:
- Verify all three environment variables are set correctly
- Check that your EmailJS service is connected (green checkmark)
- Ensure your email template is active and has the correct variable names
- Check the EmailJS dashboard → History for error logs
- Verify your email service (Gmail) is properly connected

### Rate limits exceeded:
- The free EmailJS tier has a limit of 200 emails per month
- Upgrade to a paid plan if you need more emails

### Gmail App Password issues:
- Make sure 2-factor authentication is enabled on your Google Account
- Generate a new App Password if the old one doesn't work
- App Passwords are 16 characters long - copy carefully

## Security Notes

- **Never commit `.env.local` to version control**
- The Public Key is safe to expose in client-side code
- Your email credentials are stored securely with EmailJS
- Always use App Passwords for Gmail, not your actual password
- The `.env.local` file is already in `.gitignore`

## Summary of IDs to Copy:

1. **Service ID** → From Email Services section after connecting your email provider
2. **Template ID** → From Email Templates section after saving your template
3. **Public Key** → From Account/API Keys section

All three IDs go into your `.env.local` file as shown in Step 5.
