import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostConversationsIdOfferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostConversationsIdOfferRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_price" })
  shippingPrice?: string;
}


export class PostConversationsIdOfferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostConversationsIdOfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostConversationsIdOfferPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostConversationsIdOfferRequestBody;

  @SpeakeasyMetadata()
  security: PostConversationsIdOfferSecurity;
}


export class PostConversationsIdOfferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
