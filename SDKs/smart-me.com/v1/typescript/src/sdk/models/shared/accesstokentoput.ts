import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessTokenToPut
/** 
 * Container Class for the Put action of an Access Token
**/
export class AccessTokenToPut extends SpeakeasyBase {
  @Metadata({ data: "json, name=CardId, form, name=CardId;" })
  cardId?: number;

  @Metadata({ data: "json, name=UserId, form, name=UserId;" })
  userId?: number;
}
