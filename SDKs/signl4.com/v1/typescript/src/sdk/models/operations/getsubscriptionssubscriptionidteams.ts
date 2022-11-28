import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionsSubscriptionIdTeamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsSubscriptionIdTeamsPathParams;
}


export class GetSubscriptionsSubscriptionIdTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamInfo })
  teamInfos?: shared.TeamInfo[];
}
