import React from "react";

const Footer = () => {
  return (
    <div className="row color-right rounded-bottom">
      <div className="col-md-6 color-left rounded-bottom ">
        <div className="foot-txt">
          <h5>Monthly Subscription</h5>
          <div className="d-flex">
            <h3 className="mt-3">$29 </h3>
            <p className="mt-4">&nbsp; Per Month</p>
          </div>
          <p>Full access for less then $1 day</p>
        </div>
        <div className="btn w-100 d-grid gap-2 mb-3">
        <button type="button" class="btn btn-clr">Sign Up</button>
        </div>
      </div>
      <div className="col-md-6 color-right bg-green rounded-bottom">
      <div className="foot-txt">
      <h5>Why Us</h5>
      <p>Tutorials Are by Industry Experts<br/>
      Peer & expert code review Coding exercises <br/>
      access to our github repos community forum <br/>
      Community forum <br/>
      Flashcard Decks <br/>
      New videos every weak </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
