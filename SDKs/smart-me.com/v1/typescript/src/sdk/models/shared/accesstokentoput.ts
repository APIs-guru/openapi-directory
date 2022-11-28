import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessTokenToPut
/** 
 * Container Class for the Put action of an Access Token
**/
export class AccessTokenToPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CardId, form, name=CardId;" })
  cardId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserId, form, name=UserId;" })
  userId?: number;
}
