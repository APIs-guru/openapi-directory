import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchWorkspaceCumulativeStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchWorkspaceCumulativeStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkspaceCumulativeStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" })
  splitByWaitTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkspaceCumulativeStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkspaceCumulativeStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchWorkspaceCumulativeStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchWorkspaceCumulativeStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchWorkspaceCumulativeStatisticsSecurity;
}


export class FetchWorkspaceCumulativeStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkspaceCumulativeStatistics?: shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics;
}
