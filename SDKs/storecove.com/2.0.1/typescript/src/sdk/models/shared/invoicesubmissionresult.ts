import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvoiceSubmissionResult
/** 
 * The result of an invoice submission
**/
export class InvoiceSubmissionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=guid" })
  guid?: string;
}
