import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostListingsIdOfferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostListingsIdOfferRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=price" })
  price: string;

  @Metadata({ data: "json, name=shipping_price" })
  shippingPrice?: string;
}


export class PostListingsIdOfferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostListingsIdOfferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostListingsIdOfferPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostListingsIdOfferRequestBody;

  @Metadata()
  security: PostListingsIdOfferSecurity;
}


export class PostListingsIdOfferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
