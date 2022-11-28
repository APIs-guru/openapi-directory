import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOrdersOrderIdFeedbackSellerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PostOrdersOrderIdFeedbackSellerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostOrdersOrderIdFeedbackSellerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOrdersOrderIdFeedbackSellerPathParams;

  @SpeakeasyMetadata()
  security: PostOrdersOrderIdFeedbackSellerSecurity;
}


export class PostOrdersOrderIdFeedbackSellerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
