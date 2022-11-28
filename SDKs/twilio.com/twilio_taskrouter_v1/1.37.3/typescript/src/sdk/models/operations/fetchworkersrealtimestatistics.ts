import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchWorkersRealTimeStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchWorkersRealTimeStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkersRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkersRealTimeStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkersRealTimeStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchWorkersRealTimeStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchWorkersRealTimeStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchWorkersRealTimeStatisticsSecurity;
}


export class FetchWorkersRealTimeStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics;
}
