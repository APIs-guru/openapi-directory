import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetrieveGiftCardFromNonceRequest
/** 
 * A request to retrieve gift cards by using nonces.
**/
export class RetrieveGiftCardFromNonceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nonce" })
  nonce: string;
}
