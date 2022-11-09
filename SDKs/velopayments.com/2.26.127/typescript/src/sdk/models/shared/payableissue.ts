import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayableIssue
/** 
 * payable issues for the payee and payor combination
**/
export class PayableIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}
