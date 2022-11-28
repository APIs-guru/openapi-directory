import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayableIssue2
/** 
 * payable issues for the payee and payor combination
**/
export class PayableIssue2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
