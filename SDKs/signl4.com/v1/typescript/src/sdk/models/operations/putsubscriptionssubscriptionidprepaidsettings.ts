import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSubscriptionsSubscriptionIdPrepaidSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PutSubscriptionsSubscriptionIdPrepaidSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  prepaidSettingsInfo1?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  prepaidSettingsInfo2?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  prepaidSettingsInfo3?: shared.PrepaidSettingsInfo;
}


export class PutSubscriptionsSubscriptionIdPrepaidSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSubscriptionsSubscriptionIdPrepaidSettingsPathParams;

  @SpeakeasyMetadata()
  request?: PutSubscriptionsSubscriptionIdPrepaidSettingsRequests;
}


export class PutSubscriptionsSubscriptionIdPrepaidSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
