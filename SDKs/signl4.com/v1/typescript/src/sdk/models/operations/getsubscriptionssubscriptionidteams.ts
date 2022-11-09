import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionsSubscriptionIdTeamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdTeamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionsSubscriptionIdTeamsPathParams;
}


export class GetSubscriptionsSubscriptionIdTeamsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamInfo })
  teamInfos?: shared.TeamInfo[];
}
