import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDAY_SERVERS = [
	"https://bulkexports.twilio.com",
];



export class ListDayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class ListDayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDaySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDayRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDayPathParams;

  @Metadata()
  queryParams: ListDayQueryParams;

  @Metadata()
  security: ListDaySecurity;
}


export class ListDayListDayResponseMeta extends SpeakeasyBase {
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


export class ListDayListDayResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=days", elemType: shared.BulkexportsV1ExportDay })
  days?: shared.BulkexportsV1ExportDay[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDayListDayResponseMeta;
}


export class ListDayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDayResponse?: ListDayListDayResponse;

  @Metadata()
  statusCode: number;
}
