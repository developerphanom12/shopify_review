import React from "react";
import "./MainDash.css";
import { Layout, LegacyCard } from "@shopify/polaris";
import icon from "../assets/Icon.png";
import ic1 from "../assets/Icon 1.png";
import ic2 from "../assets/Icon 2.png";
import ic3 from "../assets/Icon 3.png";
// import proimg from "../assets/Rectangle.png";

export default function MainDashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Layout>
        <Layout.Section>
          <LegacyCard className="head">
            <header>
              {" "}
              <img src={icon} alt="Profile Icon" />
              Pruebawebhooks12345
            </header>
            <div className="card_div">
              <div className="card_child">
                <p>RESPONSES</p>
                <div className="Card_img">
                  0 <img src={ic1} className="icon" />
                </div>
              </div>
              <div className="card_child">
                <p>EMAILS</p>
                <div className="Card_img">
                  0 <img src={ic2} className="icon" />
                </div>
              </div>
              <div className="card_child">
                <p>customers</p>
                <div className="Card_img">
                  0 <img src={ic3} className="icon" />
                </div>
              </div>
              <div className="card_child">
                <p>outbound email limit</p>
                <div className="Card_img">
                  <span style={{ fontSize: "13px" }}>60/100 Emails</span>
                </div>
              </div>
              <div className="card_child">
                <p>
                  total reviews <label>Avg. Rating</label>
                </p>
                <div className="Card_img">12,230</div>
              </div>
            </div>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
          <LegacyCard className="head">
            <header>
              {" "}
              <img src={icon} alt="Profile Icon" />
              Customer review
            </header>
            <div className="sec_card_div">
              <div className="sec_card_child">d
              <div>detail</div>
              {/* <div><img src={proimg} alt="brand image"/></div> */}
              </div>
              <div className="sec_card_child">d</div>
            </div>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </>
  );
}
