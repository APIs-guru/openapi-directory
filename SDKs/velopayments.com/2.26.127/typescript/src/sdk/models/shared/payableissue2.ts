import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayableIssue2
/** 
 * payable issues for the payee and payor combination
**/
export class PayableIssue2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}
