import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListEnvironmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEnvironmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListEnvironmentPathParams;

  @Metadata()
  queryParams: ListEnvironmentQueryParams;

  @Metadata()
  security: ListEnvironmentSecurity;
}


export class ListEnvironmentListEnvironmentResponseMeta extends SpeakeasyBase {
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


export class ListEnvironmentListEnvironmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.ServerlessV1ServiceEnvironment })
  environments?: shared.ServerlessV1ServiceEnvironment[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListEnvironmentListEnvironmentResponseMeta;
}


export class ListEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEnvironmentResponse?: ListEnvironmentListEnvironmentResponse;

  @Metadata()
  statusCode: number;
}
