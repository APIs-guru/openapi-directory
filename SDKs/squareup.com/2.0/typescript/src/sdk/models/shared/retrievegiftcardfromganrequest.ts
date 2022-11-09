import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetrieveGiftCardFromGanRequest
/** 
 * A request to retrieve gift cards by their GANs.
**/
export class RetrieveGiftCardFromGanRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gan" })
  gan: string;
}
