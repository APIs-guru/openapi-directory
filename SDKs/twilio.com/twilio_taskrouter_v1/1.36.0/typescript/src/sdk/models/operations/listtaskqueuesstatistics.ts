import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTASKQUEUESSTATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListTaskQueuesStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskQueuesStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" })
  splitByWaitTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class ListTaskQueuesStatisticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskQueuesStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTaskQueuesStatisticsPathParams;

  @Metadata()
  queryParams: ListTaskQueuesStatisticsQueryParams;

  @Metadata()
  security: ListTaskQueuesStatisticsSecurity;
}


export class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta;

  @Metadata({ data: "json, name=task_queues_statistics", elemType: shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics })
  taskQueuesStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics[];
}


export class ListTaskQueuesStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTaskQueuesStatisticsResponse?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse;

  @Metadata()
  statusCode: number;
}
