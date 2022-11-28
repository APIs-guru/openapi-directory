import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOrdersOrderIdFeedbackBuyerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PostOrdersOrderIdFeedbackBuyerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostOrdersOrderIdFeedbackBuyerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOrdersOrderIdFeedbackBuyerPathParams;

  @SpeakeasyMetadata()
  security: PostOrdersOrderIdFeedbackBuyerSecurity;
}


export class PostOrdersOrderIdFeedbackBuyerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
