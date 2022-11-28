import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSubscriptionsSubscriptionIdProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PutSubscriptionsSubscriptionIdProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  subscriptionProfile?: shared.SubscriptionProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  subscriptionProfile1?: shared.SubscriptionProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  subscriptionProfile2?: shared.SubscriptionProfile;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  subscriptionProfile3?: shared.SubscriptionProfile;
}


export class PutSubscriptionsSubscriptionIdProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSubscriptionsSubscriptionIdProfilePathParams;

  @SpeakeasyMetadata()
  request?: PutSubscriptionsSubscriptionIdProfileRequests;
}


export class PutSubscriptionsSubscriptionIdProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptionInfo?: shared.SubscriptionInfo;
}
