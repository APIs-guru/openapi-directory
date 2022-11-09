import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyOrdersSellingOrderIdRefundRequestsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PostMyOrdersSellingOrderIdRefundRequestsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersSellingOrderIdRefundRequestsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyOrdersSellingOrderIdRefundRequestsPathParams;

  @Metadata()
  security: PostMyOrdersSellingOrderIdRefundRequestsSecurity;
}


export class PostMyOrdersSellingOrderIdRefundRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
