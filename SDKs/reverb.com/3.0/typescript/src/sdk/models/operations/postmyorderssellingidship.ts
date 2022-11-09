import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyOrdersSellingIdShipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyOrdersSellingIdShipRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=provider" })
  provider: string;

  @Metadata({ data: "json, name=send_notification" })
  sendNotification: boolean;

  @Metadata({ data: "json, name=tracking_number" })
  trackingNumber: string;
}


export class PostMyOrdersSellingIdShipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersSellingIdShipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyOrdersSellingIdShipPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyOrdersSellingIdShipRequestBody;

  @Metadata()
  security: PostMyOrdersSellingIdShipSecurity;
}


export class PostMyOrdersSellingIdShipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
