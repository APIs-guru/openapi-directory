import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHWORKERSTATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class FetchWorkerStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkerStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" })
  taskQueueName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;
}


export class FetchWorkerStatisticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkerStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchWorkerStatisticsPathParams;

  @Metadata()
  queryParams: FetchWorkerStatisticsQueryParams;

  @Metadata()
  security: FetchWorkerStatisticsSecurity;
}


export class FetchWorkerStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkerWorkerStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkerStatistics;
}
