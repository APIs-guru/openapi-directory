import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSubscriptionsSubscriptionIdPrepaidSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PutSubscriptionsSubscriptionIdPrepaidSettingsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @Metadata({ data: "request, media_type=application/json" })
  prepaidSettingsInfo1?: shared.PrepaidSettingsInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  prepaidSettingsInfo2?: shared.PrepaidSettingsInfo;

  @Metadata({ data: "request, media_type=text/json" })
  prepaidSettingsInfo3?: shared.PrepaidSettingsInfo;
}


export class PutSubscriptionsSubscriptionIdPrepaidSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSubscriptionsSubscriptionIdPrepaidSettingsPathParams;

  @Metadata()
  request?: PutSubscriptionsSubscriptionIdPrepaidSettingsRequests;
}


export class PutSubscriptionsSubscriptionIdPrepaidSettingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @Metadata()
  statusCode: number;
}
