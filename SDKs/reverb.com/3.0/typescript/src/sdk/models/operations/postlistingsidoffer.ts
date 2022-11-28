import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostListingsIdOfferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostListingsIdOfferRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_price" })
  shippingPrice?: string;
}


export class PostListingsIdOfferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostListingsIdOfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostListingsIdOfferPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostListingsIdOfferRequestBody;

  @SpeakeasyMetadata()
  security: PostListingsIdOfferSecurity;
}


export class PostListingsIdOfferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
