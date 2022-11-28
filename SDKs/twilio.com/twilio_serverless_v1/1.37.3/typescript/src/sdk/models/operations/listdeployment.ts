import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDeploymentServerList = [
	"https://serverless.twilio.com",
] as const;


export class ListDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" })
  environmentSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListDeploymentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeploymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeploymentListDeploymentResponseMeta extends SpeakeasyBase {
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


export class ListDeploymentListDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: shared.ServerlessV1ServiceEnvironmentDeployment })
  deployments?: shared.ServerlessV1ServiceEnvironmentDeployment[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDeploymentListDeploymentResponseMeta;
}


export class ListDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDeploymentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDeploymentQueryParams;

  @SpeakeasyMetadata()
  security: ListDeploymentSecurity;
}


export class ListDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDeploymentResponse?: ListDeploymentListDeploymentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
