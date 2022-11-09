import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOrdersOrderIdFeedbackSellerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PostOrdersOrderIdFeedbackSellerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostOrdersOrderIdFeedbackSellerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOrdersOrderIdFeedbackSellerPathParams;

  @Metadata()
  security: PostOrdersOrderIdFeedbackSellerSecurity;
}


export class PostOrdersOrderIdFeedbackSellerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
