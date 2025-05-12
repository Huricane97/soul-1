import NavBar from "@components/NavBar";
import React from "react";

const PrivacyPolicy = () => {
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
      <h1>Privacy Policy</h1>
      <p>Effective Date: May 12, 2025</p>

      <p>
        Welcome to Soul Gaming! Your privacy is important to us, and we are
        committed to protecting the personal information you share with us. This
        Privacy Policy explains how we collect, use, and safeguard your
        information when you visit our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect the following types of information:
        <ul>
          <li>
            Personal Information: Such as your name, email address, and other
            details you provide when signing up or contacting us.
          </li>
          <li>
            Usage Data: Information about your interactions with our website,
            including IP address, browser type, and pages visited.
          </li>
          <li>
            Cookies: Small data files used to enhance your browsing experience.
          </li>
        </ul>
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        The information we collect is used for the following purposes:
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To improve and personalize your experience on our website.</li>
          <li>To comply with legal obligations and resolve disputes.</li>
        </ul>
      </p>

      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell or trade your personal information. However, we may share
        your information with third parties in the following situations:
        <ul>
          <li>With your consent.</li>
          <li>To comply with legal obligations or protect our rights.</li>
          <li>
            With service providers who help us operate our website or deliver
            services to you.
          </li>
        </ul>
      </p>

      <h2>4. Your Rights</h2>
      <p>
        You have the right to:
        <ul>
          <li>Access and review the personal data we hold about you.</li>
          <li>Request corrections or updates to your personal data.</li>
          <li>
            Request the deletion of your personal data, subject to legal
            obligations.
          </li>
        </ul>
      </p>

      <h2>5. Security of Your Information</h2>
      <p>
        We implement reasonable technical and organizational measures to protect
        your personal data from unauthorized access, loss, or misuse.
      </p>

      <h2>6. Updates to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. Please review this page
        periodically for updates.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at
        <a href="mailto:privacy@soulgaming.com"> privacy@soulgaming.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
