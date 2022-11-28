import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTaskQueueStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchTaskQueueStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" })
  taskQueueSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchTaskQueueStatisticsQueryParams extends SpeakeasyBase {
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


export class FetchTaskQueueStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTaskQueueStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTaskQueueStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchTaskQueueStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchTaskQueueStatisticsSecurity;
}


export class FetchTaskQueueStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTaskQueueTaskQueueStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics;
}
