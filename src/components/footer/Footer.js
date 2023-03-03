function Footer() {
  return (
    <footer className="footer">
      <div className="max-width">
        <div className="footer__information">
          <div className="flex-2">
            <h4>Panto</h4>
            <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          </div>
          <div className="flex-1">
            <p>Services</p>
            <span>Email Marketing</span>
            <span>Campaigns</span>
            <span>Branding</span>
          </div>
          <div className="flex-1">
            <p>Furniture</p>
            <span>Beds</span>
            <span>Chair</span>
            <span>All</span>
          </div>
          <div className="flex-1">
            <p>Follow Us</p>
            <span className="facebook">Facebook</span>
            <span className="twitter">Twitter</span>
            <span className="instagram">Instagram</span>
          </div>
        </div>
        <div className="footer__copyright">
          <div>Copyright © 2021</div>
          <div>
            <span className="margin-30">
              Terms & Conditions
            </span>
            <span>
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
