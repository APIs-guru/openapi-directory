import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayableIssue
/** 
 * payable issues for the payee and payor combination
**/
export class PayableIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
