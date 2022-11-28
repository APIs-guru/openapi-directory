import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListExportCustomJobServerList = [
	"https://bulkexports.twilio.com",
] as const;


export class ListExportCustomJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class ListExportCustomJobQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListExportCustomJobSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListExportCustomJobListExportCustomJobResponseMeta extends SpeakeasyBase {
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


export class ListExportCustomJobListExportCustomJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: shared.BulkexportsV1ExportExportCustomJob })
  jobs?: shared.BulkexportsV1ExportExportCustomJob[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListExportCustomJobListExportCustomJobResponseMeta;
}


export class ListExportCustomJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListExportCustomJobPathParams;

  @SpeakeasyMetadata()
  queryParams: ListExportCustomJobQueryParams;

  @SpeakeasyMetadata()
  security: ListExportCustomJobSecurity;
}


export class ListExportCustomJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listExportCustomJobResponse?: ListExportCustomJobListExportCustomJobResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
