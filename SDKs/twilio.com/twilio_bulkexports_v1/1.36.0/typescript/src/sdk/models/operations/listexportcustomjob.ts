import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTEXPORTCUSTOMJOB_SERVERS = [
	"https://bulkexports.twilio.com",
];



export class ListExportCustomJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class ListExportCustomJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListExportCustomJobSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListExportCustomJobRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListExportCustomJobPathParams;

  @Metadata()
  queryParams: ListExportCustomJobQueryParams;

  @Metadata()
  security: ListExportCustomJobSecurity;
}


export class ListExportCustomJobListExportCustomJobResponseMeta extends SpeakeasyBase {
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


export class ListExportCustomJobListExportCustomJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.BulkexportsV1ExportExportCustomJob })
  jobs?: shared.BulkexportsV1ExportExportCustomJob[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListExportCustomJobListExportCustomJobResponseMeta;
}


export class ListExportCustomJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listExportCustomJobResponse?: ListExportCustomJobListExportCustomJobResponse;

  @Metadata()
  statusCode: number;
}
