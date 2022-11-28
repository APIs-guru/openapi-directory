import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeDelta } from "./payeedelta";



// PayeeDeltaResponse
/** 
 * List Payee Changes Response Object
**/
export class PayeeDeltaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PayeeDelta })
  content?: PayeeDelta[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
