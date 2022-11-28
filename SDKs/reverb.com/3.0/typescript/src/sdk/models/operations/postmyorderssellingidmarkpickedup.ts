import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyOrdersSellingIdMarkPickedUpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyOrdersSellingIdMarkPickedUpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;
}


export class PostMyOrdersSellingIdMarkPickedUpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersSellingIdMarkPickedUpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyOrdersSellingIdMarkPickedUpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyOrdersSellingIdMarkPickedUpRequestBody;

  @SpeakeasyMetadata()
  security: PostMyOrdersSellingIdMarkPickedUpSecurity;
}


export class PostMyOrdersSellingIdMarkPickedUpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
