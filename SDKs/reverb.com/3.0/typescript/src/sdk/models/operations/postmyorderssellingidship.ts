import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyOrdersSellingIdShipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyOrdersSellingIdShipRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "json, name=send_notification" })
  sendNotification: boolean;

  @SpeakeasyMetadata({ data: "json, name=tracking_number" })
  trackingNumber: string;
}


export class PostMyOrdersSellingIdShipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersSellingIdShipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyOrdersSellingIdShipPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyOrdersSellingIdShipRequestBody;

  @SpeakeasyMetadata()
  security: PostMyOrdersSellingIdShipSecurity;
}


export class PostMyOrdersSellingIdShipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
