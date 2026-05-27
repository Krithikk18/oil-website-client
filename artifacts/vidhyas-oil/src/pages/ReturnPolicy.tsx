import { motion } from "framer-motion";

export default function ReturnPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0]"
    >
      <div className="bg-[#f5f0e8] pt-28 pb-12 px-4 text-center">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1b4332]">Return Policy</h1>
        <p className="text-[#5c5c5c] mt-3">Last updated: January 2026</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-[#5c5c5c] prose-headings:font-serif prose-headings:text-[#1b4332] prose-headings:font-semibold">
          <h2>Overview</h2>
          <p>
            At Vidhya's Oil, we take immense pride in the quality of our cold-pressed oils. Every batch is hand-crafted and quality-tested before dispatch. However, we understand that issues can occasionally arise, and we are committed to resolving them fairly and promptly in accordance with the <strong>Indian Consumer Protection Act, 2019</strong>.
          </p>

          <h2>Return Eligibility</h2>
          <p>You may request a return within <strong>7 days</strong> of receiving your order under the following conditions:</p>
          <ul>
            <li>The product delivered was <strong>damaged during transit</strong> (breakage, leakage).</li>
            <li>You received the <strong>wrong product</strong> (different from what you ordered).</li>
            <li>The product is <strong>defective</strong> (adulterated, off-smell, unusual colour not consistent with the product description).</li>
          </ul>

          <h2>Non-Returnable Items</h2>
          <p>We strictly cannot accept returns for the following, in keeping with food safety regulations:</p>
          <ul>
            <li><strong>Opened or used products</strong> — Once the seal is broken, the product cannot be returned.</li>
            <li>Products returned after the 7-day window.</li>
            <li>Products not in their original packaging.</li>
            <li>Products damaged due to misuse, improper storage, or accidents after delivery.</li>
          </ul>

          <h2>How to Initiate a Return</h2>
          <p>To start a return, please email us within 7 days of delivery at <strong>support@vidhyasoil.com</strong> with:</p>
          <ol>
            <li>Your order number (found in your confirmation email).</li>
            <li>Clear photographs of the damaged or incorrect product.</li>
            <li>A brief description of the issue.</li>
          </ol>
          <p>
            Our support team will review your request within <strong>2 business days</strong> and guide you through the process. If a return is approved, we will arrange for a pickup at no cost to you.
          </p>

          <h2>Refund Process</h2>
          <p>
            Once the returned item is received and inspected, we will notify you of the status. Approved refunds will be processed to your original payment method within <strong>5–7 business days</strong>. Please note that it may take an additional 2–5 business days for the refund to appear in your account, depending on your bank or payment provider.
          </p>

          <h2>Exchanges</h2>
          <p>
            We offer a free exchange for the same product (replacement) if the original was damaged or incorrect. If you prefer a different product, the difference in price (if any) will be charged or refunded accordingly.
          </p>

          <h2>Cancellations</h2>
          <p>
            Orders can be cancelled within <strong>2 hours of placement</strong> by contacting us at hello@vidhyasoil.com. Once dispatched, orders cannot be cancelled.
          </p>

          <h2>Governing Law</h2>
          <p>
            This Return Policy is governed by the <strong>Consumer Protection Act, 2019</strong> of India and applicable Tamil Nadu state regulations. Any disputes shall be subject to the jurisdiction of courts in Chennai, Tamil Nadu.
          </p>

          <h2>Contact</h2>
          <p>
            For return-related queries, contact us at:<br />
            <strong>Email:</strong> support@vidhyasoil.com<br />
            <strong>Phone:</strong> +91 98765 43210<br />
            <strong>WhatsApp:</strong> +91 98765 43210<br />
            <strong>Hours:</strong> Monday–Saturday, 9 AM–6 PM IST
          </p>
        </div>
      </div>
    </motion.div>
  );
}
