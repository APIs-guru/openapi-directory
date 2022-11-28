import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDayServerList = [
	"https://bulkexports.twilio.com",
] as const;


export class ListDayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class ListDayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDaySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDayListDayResponseMeta extends SpeakeasyBase {
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


export class ListDayListDayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days", elemType: shared.BulkexportsV1ExportDay })
  days?: shared.BulkexportsV1ExportDay[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDayListDayResponseMeta;
}


export class ListDayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDayPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDayQueryParams;

  @SpeakeasyMetadata()
  security: ListDaySecurity;
}


export class ListDayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDayResponse?: ListDayListDayResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
