# EmailJS Setup Guide

## ✅ What is EmailJS?
EmailJS allows you to send emails directly from your frontend without a backend server. It's perfect for contact forms, notifications, and more.

---

## 💰 Pricing & Free Tier

### **FREE Plan (Most Popular):**
- ✅ **200 emails per month** - Perfect for portfolio/contact forms
- ✅ **Unlimited templates**
- ✅ **1 email service** (Gmail, Outlook, etc.)
- ✅ **No credit card required**
- ✅ **Great for personal projects**

### **Paid Plans:**
- **Plus Plan**: €4.99/month → 1,000 emails/month
- **Pro Plan**: €12.99/month → 5,000 emails/month
- **Enterprise**: Custom pricing

For a portfolio website, the **free tier is perfect**!

---

## 🚀 Step-by-Step Setup

### **Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" → Choose "Sign up with Google" (easiest)
3. Complete the registration

### **Step 2: Add Email Service (Gmail Recommended)**
1. Go to **EmailJS Dashboard** → **Email Services**
2. Click **"Add New Service"**
3. Select **Gmail**
4. Follow Gmail authentication:
   - You'll be prompted to log in with your Gmail
   - Allow EmailJS to access your email
5. **Save Service** → Note the **Service ID** (e.g., `service_abc123xyz`)

### **Step 3: Create Email Template**
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use this template:

```
Name: Contact Form Template
Subject: New Portfolio Inquiry from {{from_name}}

Body:
---
Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
---
```

4. Click **"Save"** → Note the **Template ID** (e.g., `template_abc123xyz`)

### **Step 4: Get Your Public Key**
1. Go to **Account Settings** → **API Keys**
2. Copy your **Public Key** (starts with short string, NOT the private key)
3. Keep this secret (but it's called "public" so it's okay in frontend code)

---

## 🔑 Create .env.local File

Create a `.env.local` file in your project root (same level as `package.json`):

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID="service_your_service_id_here"
VITE_EMAILJS_TEMPLATE_ID="template_your_template_id_here"
VITE_EMAILJS_PUBLIC_KEY="your_public_key_here"

# Where to receive emails
VITE_RECEIVER_EMAIL="your-email@gmail.com"
```

### **Example .env.local:**
```env
VITE_EMAILJS_SERVICE_ID="service_abc123xyz"
VITE_EMAILJS_TEMPLATE_ID="template_def456uvw"
VITE_EMAILJS_PUBLIC_KEY="GHIjklmnOPQRSTuvwxyz"
VITE_RECEIVER_EMAIL="patelsumit86112@gmail.com"
```

---

## 📝 Important Notes

✅ **DO add .env.local to .gitignore** - Keep your keys secret!
```
# .gitignore
.env.local
.env.*.local
```

✅ **VITE_ Prefix Required** - All env variables must start with `VITE_` to be accessible in frontend code

✅ **Keys are Different**:
- **Public Key**: Safe to expose in frontend (that's why it's "public")
- **Private Key**: NEVER use this in frontend code
- Always use PUBLIC key in `VITE_EMAILJS_PUBLIC_KEY`

---

## 🧪 Testing the Contact Form

1. Start your dev server: `npm run dev`
2. Navigate to contact section
3. Fill in the form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Message: "Test message"
4. Click **"Send Message"**
5. You should see:
   - ✓ Loading state: "Sending..."
   - ✓ Success toast: "✓ Email sent successfully!" (bottom right)
   - ✓ Email in your inbox from the form submitter

---

## 📨 What Happens When User Submits?

1. User fills form with name, email, and message
2. Form sends via EmailJS:
   - **From**: User's email address
   - **Subject**: "New Portfolio Inquiry from [User Name]"
   - **Body**: User's message
   - **To**: Your email (`VITE_RECEIVER_EMAIL`)
3. You get notified with green toast: **"✓ Email sent successfully!"** (bottom right corner)
4. You receive the email in your Gmail inbox
5. Form clears for next submission

---

## 🎯 Key Features Implemented

✅ Real email sending (not simulated)
✅ User's email included for reply
✅ User's name in subject line
✅ Toast notification on bottom right corner
✅ Success/Error handling
✅ Form auto-clears after success
✅ Environment variables for security
✅ Responsive design

---

## 🐛 Troubleshooting

### **"Email not sending?"**
- Check `.env.local` file exists with correct values
- Verify you copied PUBLIC KEY (not private key)
- Make sure Gmail service is connected in EmailJS dashboard

### **"Getting error about environment variables?"**
- Restart dev server after creating `.env.local`
- Make sure all keys start with `VITE_`
- Verify no spaces or quotes in `.env.local`

### **"Toast not showing?"**
- Check browser console for errors
- Verify AnimatePresence is imported from motion/react
- Make sure notification state is being set

### **"Form keeps showing 'Sending...'?"**
- Check EmailJS credentials are correct
- Look at browser console for error details
- Verify email address format is valid

---

## 📞 Support

- **EmailJS Support**: https://www.emailjs.com/docs/
- **EmailJS Community**: https://dashboard.emailjs.com/support

---

**That's it! Your contact form is now fully functional!** 🎉
