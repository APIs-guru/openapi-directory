import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvoiceAcceptedPaymentMethods
/** 
 * The payment methods that customers can use to pay an invoice on the Square-hosted invoice page.
**/
export class InvoiceAcceptedPaymentMethods extends SpeakeasyBase {
  @Metadata({ data: "json, name=bank_account" })
  bankAccount?: boolean;

  @Metadata({ data: "json, name=card" })
  card?: boolean;

  @Metadata({ data: "json, name=square_gift_card" })
  squareGiftCard?: boolean;
}
