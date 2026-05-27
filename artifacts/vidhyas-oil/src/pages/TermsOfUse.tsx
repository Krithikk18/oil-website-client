import { motion } from "framer-motion";

export default function TermsOfUse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0]"
    >
      <div className="bg-[#f5f0e8] pt-28 pb-12 px-4 text-center">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1b4332]">Terms of Use</h1>
        <p className="text-[#5c5c5c] mt-3">Last updated: January 2026</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-[#5c5c5c] prose-headings:font-serif prose-headings:text-[#1b4332] prose-headings:font-semibold">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website vidhyasoil.com ("Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site. These terms constitute a legally binding agreement between you and Vidhya's Oil (sole proprietorship, Chennai, Tamil Nadu, India).
          </p>

          <h2>2. Products and Pricing</h2>
          <p>
            All prices on this Site are listed in <strong>Indian Rupees (INR)</strong> and are inclusive of applicable taxes unless otherwise stated. Prices are subject to change without prior notice. We reserve the right to modify, discontinue, or limit the availability of any product at any time.
          </p>
          <p>
            Product images are for illustrative purposes. While we make every effort to accurately represent our products, slight variations in colour may occur due to screen settings.
          </p>

          <h2>3. Order and Payment Terms</h2>
          <p>
            By placing an order, you represent that you are at least 18 years of age and are legally capable of entering into a binding contract. All orders are subject to availability and confirmation. We reserve the right to refuse or cancel any order.
          </p>
          <p>
            Payments are processed securely. We currently accept UPI, net banking, credit/debit cards, and cash on delivery (COD) in select pin codes. Order confirmation will be sent to your registered email address.
          </p>

          <h2>4. Shipping Policy</h2>
          <p>Orders are typically processed within 1–2 business days of payment confirmation. Estimated delivery timelines:</p>
          <ul>
            <li><strong>Tamil Nadu:</strong> 2–3 business days</li>
            <li><strong>South India (Andhra Pradesh, Karnataka, Kerala, Telangana):</strong> 3–5 business days</li>
            <li><strong>Rest of India:</strong> 5–7 business days</li>
          </ul>
          <p>
            Shipping charges, if applicable, will be displayed at checkout. We are not responsible for delays caused by courier partners or circumstances beyond our control (weather, strikes, public holidays).
          </p>

          <h2>5. Use of the Site</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose.</li>
            <li>Reproduce, duplicate, or exploit any portion of the Site without express written permission.</li>
            <li>Use automated tools, bots, or scrapers to access Site content.</li>
            <li>Transmit any harmful, offensive, or disruptive content via the Site.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on this Site — including the Vidhya's Oil name, logo, product descriptions, photographs, and design elements — is the exclusive property of Vidhya's Oil and is protected under Indian copyright and trademark laws. Unauthorised use, reproduction, or distribution is strictly prohibited.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Vidhya's Oil shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site or products. Our maximum liability for any claim shall not exceed the amount you paid for the specific product giving rise to the claim.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted, error-free, or free from viruses. Use the Site at your own risk.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. These are provided for convenience only. We are not responsible for the content, privacy practices, or terms of third-party sites.
          </p>

          <h2>9. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Site following any changes constitutes your acceptance of the revised Terms.
          </p>

          <h2>10. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, specifically applicable to the State of <strong>Tamil Nadu</strong>. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Chennai, Tamil Nadu, India</strong>.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these Terms, contact us at:<br />
            <strong>Email:</strong> legal@vidhyasoil.com<br />
            <strong>Address:</strong> 42, Velachery Main Road, Chennai — 600 042, Tamil Nadu, India
          </p>
        </div>
      </div>
    </motion.div>
  );
}
