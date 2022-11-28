import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyOrdersSellingOrderIdRefundRequestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PostMyOrdersSellingOrderIdRefundRequestsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersSellingOrderIdRefundRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyOrdersSellingOrderIdRefundRequestsPathParams;

  @SpeakeasyMetadata()
  security: PostMyOrdersSellingOrderIdRefundRequestsSecurity;
}


export class PostMyOrdersSellingOrderIdRefundRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
