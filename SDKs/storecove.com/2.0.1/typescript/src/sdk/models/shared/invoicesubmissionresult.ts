import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvoiceSubmissionResult
/** 
 * The result of an invoice submission
**/
export class InvoiceSubmissionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;
}
