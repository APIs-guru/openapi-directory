import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}


export class RetrieveSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveSubscriptionPathParams;

  @Metadata()
  security: RetrieveSubscriptionSecurity;
}


export class RetrieveSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveSubscriptionResponse?: shared.RetrieveSubscriptionResponse;

  @Metadata()
  statusCode: number;
}
