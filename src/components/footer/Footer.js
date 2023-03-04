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
            <a href={ () => {} }>Email Marketing</a>
            <a href={ () => {} }>Campaigns</a>
            <a href={ () => {} }>Branding</a>
          </div>
          <div className="flex-1">
            <p>Furniture</p>
            <a href={ () => {} }>Beds</a>
            <a href={ () => {} }>Chair</a>
            <a href={ () => {} }>All</a>
          </div>
          <div className="flex-1">
            <p>Follow Us</p>
            <a href={ () => {} } className="facebook">Facebook</a>
            <a href={ () => {} } className="twitter">Twitter</a>
            <a href={ () => {} } className="instagram">Instagram</a>
          </div>
        </div>
        <div className="footer__copyright">
          <div>Copyright © 2021</div>
          <div>
            <a href={ () => {} } className="margin-30">
              Terms & Conditions
            </a>
            <a href={ () => {} }>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
