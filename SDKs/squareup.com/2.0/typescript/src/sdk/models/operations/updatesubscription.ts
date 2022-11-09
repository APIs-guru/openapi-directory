import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}


export class UpdateSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSubscriptionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateSubscriptionRequest;

  @Metadata()
  security: UpdateSubscriptionSecurity;
}


export class UpdateSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSubscriptionResponse?: shared.UpdateSubscriptionResponse;
}
