import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTVARIABLE_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListVariablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" })
  environmentSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListVariableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListVariableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVariableRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListVariablePathParams;

  @Metadata()
  queryParams: ListVariableQueryParams;

  @Metadata()
  security: ListVariableSecurity;
}


export class ListVariableListVariableResponseMeta extends SpeakeasyBase {
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


export class ListVariableListVariableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListVariableListVariableResponseMeta;

  @Metadata({ data: "json, name=variables", elemType: shared.ServerlessV1ServiceEnvironmentVariable })
  variables?: shared.ServerlessV1ServiceEnvironmentVariable[];
}


export class ListVariableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listVariableResponse?: ListVariableListVariableResponse;

  @Metadata()
  statusCode: number;
}
