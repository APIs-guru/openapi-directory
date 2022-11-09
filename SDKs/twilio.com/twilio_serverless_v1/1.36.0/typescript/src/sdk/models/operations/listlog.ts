import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTLOG_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListLogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" })
  environmentSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FunctionSid" })
  functionSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;
}


export class ListLogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListLogRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListLogPathParams;

  @Metadata()
  queryParams: ListLogQueryParams;

  @Metadata()
  security: ListLogSecurity;
}


export class ListLogListLogResponseMeta extends SpeakeasyBase {
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


export class ListLogListLogResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logs", elemType: shared.ServerlessV1ServiceEnvironmentLog })
  logs?: shared.ServerlessV1ServiceEnvironmentLog[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListLogListLogResponseMeta;
}


export class ListLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listLogResponse?: ListLogListLogResponse;

  @Metadata()
  statusCode: number;
}
