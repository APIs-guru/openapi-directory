import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEPLOYMENT_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" })
  environmentSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListDeploymentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeploymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDeploymentPathParams;

  @Metadata()
  queryParams: ListDeploymentQueryParams;

  @Metadata()
  security: ListDeploymentSecurity;
}


export class ListDeploymentListDeploymentResponseMeta extends SpeakeasyBase {
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


export class ListDeploymentListDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.ServerlessV1ServiceEnvironmentDeployment })
  deployments?: shared.ServerlessV1ServiceEnvironmentDeployment[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDeploymentListDeploymentResponseMeta;
}


export class ListDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeploymentResponse?: ListDeploymentListDeploymentResponse;

  @Metadata()
  statusCode: number;
}
