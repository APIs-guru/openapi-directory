import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTaskQueueCumulativeStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchTaskQueueCumulativeStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" })
  taskQueueSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchTaskQueueCumulativeStatisticsQueryParams extends SpeakeasyBase {
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


export class FetchTaskQueueCumulativeStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTaskQueueCumulativeStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTaskQueueCumulativeStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchTaskQueueCumulativeStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchTaskQueueCumulativeStatisticsSecurity;
}


export class FetchTaskQueueCumulativeStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics;
}
