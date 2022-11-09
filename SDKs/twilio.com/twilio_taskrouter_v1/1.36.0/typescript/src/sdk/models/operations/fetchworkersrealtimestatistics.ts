import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHWORKERSREALTIMESTATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class FetchWorkersRealTimeStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkersRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkersRealTimeStatisticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkersRealTimeStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchWorkersRealTimeStatisticsPathParams;

  @Metadata()
  queryParams: FetchWorkersRealTimeStatisticsQueryParams;

  @Metadata()
  security: FetchWorkersRealTimeStatisticsSecurity;
}


export class FetchWorkersRealTimeStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics;
}
