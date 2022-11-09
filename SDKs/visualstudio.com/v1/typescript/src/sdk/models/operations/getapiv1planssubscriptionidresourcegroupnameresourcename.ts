import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceGroupName" })
  resourceGroupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1PlansSubscriptionIdResourceGroupNameResourceNamePathParams;
}


export class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  planResult?: shared.PlanResult;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
