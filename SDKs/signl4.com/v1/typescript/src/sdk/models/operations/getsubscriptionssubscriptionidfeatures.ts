import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionsSubscriptionIdFeaturesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdFeaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsSubscriptionIdFeaturesPathParams;
}


export class GetSubscriptionsSubscriptionIdFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SubscriptionFeature })
  subscriptionFeatures?: shared.SubscriptionFeature[];
}
