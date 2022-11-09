import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResumeSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}


export class ResumeSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ResumeSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResumeSubscriptionPathParams;

  @Metadata()
  security: ResumeSubscriptionSecurity;
}


export class ResumeSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resumeSubscriptionResponse?: shared.ResumeSubscriptionResponse;

  @Metadata()
  statusCode: number;
}
