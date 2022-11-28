import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchWorkerInstanceStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchWorkerInstanceStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" })
  workerSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkerInstanceStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkerInstanceStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkerInstanceStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchWorkerInstanceStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchWorkerInstanceStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchWorkerInstanceStatisticsSecurity;
}


export class FetchWorkerInstanceStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkerWorkerInstanceStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics;
}
