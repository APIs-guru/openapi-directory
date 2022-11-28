import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchWorkerStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchWorkerStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkerStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" })
  taskQueueName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;
}


export class FetchWorkerStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkerStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchWorkerStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchWorkerStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchWorkerStatisticsSecurity;
}


export class FetchWorkerStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkerWorkerStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkerStatistics;
}
