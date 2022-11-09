import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyOrdersSellingIdMarkPickedUpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyOrdersSellingIdMarkPickedUpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;
}


export class PostMyOrdersSellingIdMarkPickedUpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersSellingIdMarkPickedUpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyOrdersSellingIdMarkPickedUpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyOrdersSellingIdMarkPickedUpRequestBody;

  @Metadata()
  security: PostMyOrdersSellingIdMarkPickedUpSecurity;
}


export class PostMyOrdersSellingIdMarkPickedUpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
