import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceGroupName" })
  resourceGroupName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1PlansSubscriptionIdResourceGroupNameResourceNamePathParams;
}


export class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  planResult?: shared.PlanResult;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
