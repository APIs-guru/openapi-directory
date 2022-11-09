import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostConversationsIdOfferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostConversationsIdOfferRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=price" })
  price: string;

  @Metadata({ data: "json, name=shipping_price" })
  shippingPrice?: string;
}


export class PostConversationsIdOfferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostConversationsIdOfferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostConversationsIdOfferPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostConversationsIdOfferRequestBody;

  @Metadata()
  security: PostConversationsIdOfferSecurity;
}


export class PostConversationsIdOfferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
