import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSubscriptionsSubscriptionIdProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PutSubscriptionsSubscriptionIdProfileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  subscriptionProfile?: shared.SubscriptionProfile;

  @Metadata({ data: "request, media_type=application/json" })
  subscriptionProfile1?: shared.SubscriptionProfile;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  subscriptionProfile2?: shared.SubscriptionProfile;

  @Metadata({ data: "request, media_type=text/json" })
  subscriptionProfile3?: shared.SubscriptionProfile;
}


export class PutSubscriptionsSubscriptionIdProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSubscriptionsSubscriptionIdProfilePathParams;

  @Metadata()
  request?: PutSubscriptionsSubscriptionIdProfileRequests;
}


export class PutSubscriptionsSubscriptionIdProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionInfo?: shared.SubscriptionInfo;
}
