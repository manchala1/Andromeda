import React from "react";
import { Card } from "react-bootstrap";
import Pl from "../assets/pl.png";
import "../components/becomeapartner.css";

function loanagainstproperty() {
  return (
    <div>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-3">
            <img src={Pl} alt="personalloan" class="img1" />
          </div>
          <div class="col-lg-9">
            <Card border="info">
              <Card.Header as="h5">What Is Loan Against Property</Card.Header>
              <Card.Body>
                <Card.Text>
                  Loan against property (LAP), are basically loans provided by
                  banks against the security of one’s own property. LAP is
                  designed to meet the financial needs of someone who already
                  owns a house or multiple properties so as to get the best out
                  of their assets. Its important to remember that the property
                  which you are putting up for your loan should be free any
                  encumbrance (i.e. it is not given as security for any purpose
                  or any other loan). Banks provide LAP for both Salaried as
                  well as Self-Employed individuals. The rates and loan amounts
                  differ based on your property and your annual income. Banks
                  will always want to consider all risks, which is why while you
                  are applying for your loan against property, there are certain
                  factors the bank considers with respect to your property to
                  mitigate its risks in giving out the loan. These factors
                  determine your rate of interest, and loan amount. You can get
                  a LAP of up to 80% of the registered value of your property
                  depending on the Bank’s policy and the property type and
                  valuation. The value of the property would be determined
                  through a valuation conducted by the Loan Provider.
                  Individuals apply for LAP for a variety of reasons. Some of
                  the common ones are your childs wedding, loans for new
                  business ventures, second homes, vacations, medical treatment
                  just to name a few.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card border="info">
              <Card.Header as="h5">
                How To Apply For Loan Against Property
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <ul>
                    <li>Application</li>
                    <li>Processing</li>
                    <li>Documentation</li>
                    <li>Property Verification/Valuation</li>
                    <li>Sanctioning of the Loan</li>
                    <li>Disbursement</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card border="info">
              <Card.Header as="h5">
                Important Questions on Loan Against Property
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <ul>
                    <li>
                      <b>
                        What kind of processing fee do you need to pay for Loan
                        Against Property?
                      </b>
                    </li>
                    <label>
                      A nominal fees and charges are to be paid to the Bank
                      depending upon their term and conditions.
                    </label>
                    <li>
                      <b>
                        How much time does the bank take to disburse the loan?
                      </b>
                    </li>
                    <label>
                      The processing of the loans usually takes 7 to 10 working
                      days once all the documents are submitted. It also depends
                      upon your profile and documentation.
                    </label>
                    <li>
                      <b>How is interest charged on Loan Against Property?</b>
                    </li>
                    <label>
                      Some financial institutions make LAP available only under
                      the floating rate. Fixed rate loans are off limits.
                      Borrowers need to enquire before finalising a LAP from
                      lending institutions.
                    </label>
                    <label>
                      It is normally available for residential properties only,
                      but can be available for commercial property also.
                    </label>
                    <li>
                      <b>Does the property have to be insured?</b>
                    </li>
                    <label>
                      Yes the property has to be insured against fire, flood,
                      earthquakes and other appropriate hazards during the tenor
                      of the loan.
                    </label>
                    <li>
                      <b>How can I repay my loan? </b>
                    </li>
                    <label>
                      The repayment of loan is done through Equated Monthly
                      Instalments. It can be paid through Post Dated Cheques
                      (PDC) or Electronic Clearance System (ECS).
                    </label>
                    <li>
                      <b>Can I pre-pay my loan?</b>
                    </li>
                    <label>
                      The loan against property can be pre-paid along with the
                      pre-payment charges. Usually the bank charges 2% of the
                      principal pre-paid.
                    </label>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loanagainstproperty;
