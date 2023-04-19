import Title from "@/app/components/Title";

export default function RefundPage() {
  return (
    <>
      <title>Refund Policy - Envisage 23</title>
      <div>
        <Title title="Refund Policy" />
        <section className="prose mx-auto max-w-5xl px-5 py-20">
          <h2>Cancellation</h2>
          <p>
            IIC TMSL Envisage prohibits the cancellation of registration for any event
            after a payment has already been made successfully, hence we advice you to
            carefully review your selection of events, before confirming the payment.
          </p>
          <h2>Refund Policy</h2>
          <p>
            Carefully review your selection of events before you confirm the payment.
            Envisage prohibits refunds or exchanges after you have made payments for
            one/or more events. If you face any technical issues, IIC TMSL will refund
            your money via Razorpay to your payment or given bank account within 5-7
            working days.
          </p>

          <h2>Contact Us</h2>
          <p>
            In case you have any suggestions or questions regarding our Refund or
            Cancellation Policy, please contact us at
            <a href="mailto:iic.tmsl@gmail.com" className="pl-2">
              iic.tmsl@gmail.com
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
