import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOrdersOrderIdFeedbackBuyerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PostOrdersOrderIdFeedbackBuyerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostOrdersOrderIdFeedbackBuyerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOrdersOrderIdFeedbackBuyerPathParams;

  @Metadata()
  security: PostOrdersOrderIdFeedbackBuyerSecurity;
}


export class PostOrdersOrderIdFeedbackBuyerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
