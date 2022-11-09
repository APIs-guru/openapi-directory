import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFUNCTIONVERSION_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListFunctionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionSid" })
  functionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListFunctionVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFunctionVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFunctionVersionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFunctionVersionPathParams;

  @Metadata()
  queryParams: ListFunctionVersionQueryParams;

  @Metadata()
  security: ListFunctionVersionSecurity;
}


export class ListFunctionVersionListFunctionVersionResponseMeta extends SpeakeasyBase {
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


export class ListFunctionVersionListFunctionVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=function_versions", elemType: shared.ServerlessV1ServiceFunctionFunctionVersion })
  functionVersions?: shared.ServerlessV1ServiceFunctionFunctionVersion[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFunctionVersionListFunctionVersionResponseMeta;
}


export class ListFunctionVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFunctionVersionResponse?: ListFunctionVersionListFunctionVersionResponse;

  @Metadata()
  statusCode: number;
}
