import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTALERT_SERVERS = [
	"https://monitor.twilio.com",
];



export class ListAlertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LogLevel" })
  logLevel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;
}


export class ListAlertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAlertRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListAlertQueryParams;

  @Metadata()
  security: ListAlertSecurity;
}


export class ListAlertListAlertResponseMeta extends SpeakeasyBase {
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


export class ListAlertListAlertResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts", elemType: shared.MonitorV1Alert })
  alerts?: shared.MonitorV1Alert[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListAlertListAlertResponseMeta;
}


export class ListAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAlertResponse?: ListAlertListAlertResponse;

  @Metadata()
  statusCode: number;
}
