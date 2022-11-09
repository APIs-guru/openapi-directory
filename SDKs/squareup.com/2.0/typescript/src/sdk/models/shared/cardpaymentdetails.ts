import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Card } from "./card";
import { CardPaymentTimeline } from "./cardpaymenttimeline";
import { DeviceDetails } from "./devicedetails";
import { Error } from "./error";


// CardPaymentDetails
/** 
 * Reflects the current status of a card payment. Contains only non-confidential information.
**/
export class CardPaymentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_cryptogram" })
  applicationCryptogram?: string;

  @Metadata({ data: "json, name=application_identifier" })
  applicationIdentifier?: string;

  @Metadata({ data: "json, name=application_name" })
  applicationName?: string;

  @Metadata({ data: "json, name=auth_result_code" })
  authResultCode?: string;

  @Metadata({ data: "json, name=avs_status" })
  avsStatus?: string;

  @Metadata({ data: "json, name=card" })
  card?: Card;

  @Metadata({ data: "json, name=card_payment_timeline" })
  cardPaymentTimeline?: CardPaymentTimeline;

  @Metadata({ data: "json, name=cvv_status" })
  cvvStatus?: string;

  @Metadata({ data: "json, name=device_details" })
  deviceDetails?: DeviceDetails;

  @Metadata({ data: "json, name=entry_method" })
  entryMethod?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=refund_requires_card_presence" })
  refundRequiresCardPresence?: boolean;

  @Metadata({ data: "json, name=statement_description" })
  statementDescription?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=verification_method" })
  verificationMethod?: string;

  @Metadata({ data: "json, name=verification_results" })
  verificationResults?: string;
}
