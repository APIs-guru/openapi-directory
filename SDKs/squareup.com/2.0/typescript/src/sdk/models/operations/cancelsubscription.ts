import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}


export class CancelSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CancelSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelSubscriptionPathParams;

  @Metadata()
  security: CancelSubscriptionSecurity;
}


export class CancelSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  cancelSubscriptionResponse?: shared.CancelSubscriptionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
