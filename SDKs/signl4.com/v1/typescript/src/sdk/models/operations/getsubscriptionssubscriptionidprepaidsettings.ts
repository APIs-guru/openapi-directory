import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionsSubscriptionIdPrepaidSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdPrepaidSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsSubscriptionIdPrepaidSettingsPathParams;
}


export class GetSubscriptionsSubscriptionIdPrepaidSettingsResponse extends SpeakeasyBase {
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
