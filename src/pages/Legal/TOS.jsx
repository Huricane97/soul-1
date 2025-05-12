import NavBar from "@components/NavBar";
import React from "react";

const TermsOfService = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#fff",
      }}
    >
      <NavBar />
      <h1>Terms of Service</h1>
      <p>Effective Date: May 12, 2025</p>

      <p>
        Welcome to Soul Gaming! These Terms of Service ("Terms") govern your
        access to and use of our website and services. By using our website, you
        agree to be bound by these Terms. If you do not agree, please do not use
        our services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our website, you confirm that you have read,
        understood, and agree to these Terms and our Privacy Policy.
      </p>

      <h2>2. Use of Services</h2>
      <p>
        You agree to use the services provided by Soul Gaming for lawful
        purposes only. You are prohibited from:
        <ul>
          <li>
            Engaging in any activity that violates local, state, national, or
            international laws.
          </li>
          <li>Using our services to transmit harmful or malicious content.</li>
          <li>
            Attempting to disrupt the functionality of our website or services.
          </li>
        </ul>
      </p>

      <h2>3. User Accounts</h2>
      <p>
        To access certain features, you may need to create an account. You are
        responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on the Soul Gaming website, including text, graphics, logos,
        and software, is the property of Soul Gaming or its licensors and is
        protected by copyright, trademark, and other laws.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Soul Gaming is not liable for any direct, indirect, incidental, or
        consequential damages resulting from your use of our services. This
        includes, but is not limited to, damages for loss of profits, data, or
        other intangible losses.
      </p>

      <h2>6. Modifications to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms at any time without
        prior notice. Your continued use of the website constitutes acceptance
        of the updated Terms.
      </p>

      <h2>7. Termination</h2>
      <p>
        We may terminate or suspend your access to our services at our sole
        discretion, without prior notice, for any conduct that we deem to
        violate these Terms or is harmful to others.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms are governed by the laws of [Your Jurisdiction], without
        regard to its conflict of law principles.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For questions or concerns about these Terms, please contact us at{" "}
        <a href="mailto:tos@soulgaming.com">tos@soulgaming.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
