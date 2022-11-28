import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeDelta2 } from "./payeedelta2";



// PayeeDeltaResponse2
/** 
 * List Payee Changes Response Object
**/
export class PayeeDeltaResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PayeeDelta2 })
  content?: PayeeDelta2[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
