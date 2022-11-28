import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTaskQueuesStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class ListTaskQueuesStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskQueuesStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" })
  splitByWaitTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class ListTaskQueuesStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=task_queues_statistics", elemType: shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics })
  taskQueuesStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics[];
}


export class ListTaskQueuesStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListTaskQueuesStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListTaskQueuesStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: ListTaskQueuesStatisticsSecurity;
}


export class ListTaskQueuesStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTaskQueuesStatisticsResponse?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
