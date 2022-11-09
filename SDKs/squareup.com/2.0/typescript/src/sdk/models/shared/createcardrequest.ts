import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Card } from "./card";


// CreateCardRequest
/** 
 * Creates a card from the source (nonce, payment id, etc). Accessible via
 * HTTP requests at POST https://connect.squareup.com/v2/cards
**/
export class CreateCardRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=card" })
  card: Card;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=source_id" })
  sourceId: string;

  @Metadata({ data: "json, name=verification_token" })
  verificationToken?: string;
}
