import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0]"
    >
      <div className="bg-[#f5f0e8] pt-28 pb-12 px-4 text-center">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1b4332]">Privacy Policy</h1>
        <p className="text-[#5c5c5c] mt-3">Last updated: January 2026</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-[#5c5c5c] prose-headings:font-serif prose-headings:text-[#1b4332] prose-headings:font-semibold">
          <h2>1. Introduction</h2>
          <p>
            Vidhya's Oil ("we", "us", or "our"), registered in Chennai, Tamil Nadu, India, is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website vidhyasoil.com, in accordance with the <strong>Information Technology Act, 2000</strong> and the <strong>Information Technology (Amendment) Act, 2008</strong>.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following categories of personal information:</p>
          <ul>
            <li><strong>Identity data:</strong> First name, last name.</li>
            <li><strong>Contact data:</strong> Email address, phone number, delivery address.</li>
            <li><strong>Transaction data:</strong> Details of products purchased, order history, payment method type (we do not store full card numbers).</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information, pages visited, time and date of access.</li>
            <li><strong>Marketing data:</strong> Preferences for receiving communications from us, if you opt in.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To process and fulfil your orders (legal basis: contract performance).</li>
            <li>To send order confirmations, shipping updates, and delivery notifications.</li>
            <li>To respond to customer service enquiries.</li>
            <li>To send marketing communications — only with your explicit consent. You may unsubscribe at any time.</li>
            <li>To improve our website and services based on usage analytics.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>4. Third-Party Service Providers</h2>
          <p>We share your data only with trusted service providers necessary to operate our business:</p>
          <ul>
            <li><strong>Razorpay</strong> — payment gateway for processing transactions. Subject to Razorpay's own Privacy Policy.</li>
            <li><strong>Shiprocket / Delhivery</strong> — logistics partners for order fulfilment. Name and address shared as required.</li>
            <li><strong>Google Analytics</strong> — anonymised website traffic analysis. No personally identifiable information is shared.</li>
          </ul>
          <p><strong>We do not sell, rent, or trade your personal data to any third party.</strong></p>

          <h2>5. Cookies</h2>
          <p>We use the following types of cookies:</p>
          <ul>
            <li><strong>Essential cookies:</strong> Session cookies required for cart functionality and secure login.</li>
            <li><strong>Analytics cookies:</strong> To understand how users navigate our site (Google Analytics). These can be opted out via browser settings.</li>
            <li><strong>Preference cookies:</strong> To remember your language and display preferences.</li>
          </ul>
          <p>
            You can manage or disable cookies in your browser settings. Disabling essential cookies may affect your ability to use certain features of the Site.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by Indian tax and accounting laws (typically 7 years for financial records). Marketing data is retained until you unsubscribe.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under applicable Indian law, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> the personal data we hold about you.</li>
            <li><strong>Correct</strong> inaccurate or incomplete personal data.</li>
            <li><strong>Delete</strong> your personal data (subject to legal retention requirements).</li>
            <li><strong>Withdraw consent</strong> for marketing communications at any time.</li>
          </ul>
          <p>To exercise these rights, email us at privacy@vidhyasoil.com. We will respond within 30 days.</p>

          <h2>8. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration. All payment transactions are encrypted via SSL/TLS.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our Site is not directed at children under 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Material changes will be notified via email or a prominent notice on the Site. Your continued use of the Site constitutes acceptance of the updated policy.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            This Privacy Policy is governed by the <strong>Information Technology Act, 2000</strong> and related rules. Disputes shall be subject to the jurisdiction of courts in Chennai, Tamil Nadu, India.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            For privacy-related concerns or to exercise your rights, contact our Privacy Officer:<br />
            <strong>Email:</strong> privacy@vidhyasoil.com<br />
            <strong>Address:</strong> 42, Velachery Main Road, Chennai — 600 042, Tamil Nadu, India<br />
            <strong>Phone:</strong> +91 98765 43210
          </p>
        </div>
      </div>
    </motion.div>
  );
}
