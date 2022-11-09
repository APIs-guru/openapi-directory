import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionsSubscriptionIdFeaturesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdFeaturesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionsSubscriptionIdFeaturesPathParams;
}


export class GetSubscriptionsSubscriptionIdFeaturesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SubscriptionFeature })
  subscriptionFeatures?: shared.SubscriptionFeature[];
}
