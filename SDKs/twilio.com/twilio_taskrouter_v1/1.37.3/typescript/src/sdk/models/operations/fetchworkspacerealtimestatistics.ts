import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchWorkspaceRealTimeStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchWorkspaceRealTimeStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkspaceRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkspaceRealTimeStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkspaceRealTimeStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchWorkspaceRealTimeStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchWorkspaceRealTimeStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchWorkspaceRealTimeStatisticsSecurity;
}


export class FetchWorkspaceRealTimeStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkspaceRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics;
}
