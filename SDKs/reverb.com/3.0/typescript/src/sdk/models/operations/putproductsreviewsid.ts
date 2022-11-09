import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProductsReviewsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutProductsReviewsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutProductsReviewsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutProductsReviewsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProductsReviewsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutProductsReviewsIdRequestBody;

  @Metadata()
  security: PutProductsReviewsIdSecurity;
}


export class PutProductsReviewsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
