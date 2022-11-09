import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFUNCTION_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListFunctionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListFunctionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFunctionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFunctionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFunctionPathParams;

  @Metadata()
  queryParams: ListFunctionQueryParams;

  @Metadata()
  security: ListFunctionSecurity;
}


export class ListFunctionListFunctionResponseMeta extends SpeakeasyBase {
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


export class ListFunctionListFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=functions", elemType: shared.ServerlessV1ServiceFunction })
  functions?: shared.ServerlessV1ServiceFunction[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFunctionListFunctionResponseMeta;
}


export class ListFunctionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFunctionResponse?: ListFunctionListFunctionResponse;

  @Metadata()
  statusCode: number;
}
