import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEPLOYEDDEVICESDEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class ListDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesDeploymentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDeployedDevicesDeploymentPathParams;

  @Metadata()
  queryParams: ListDeployedDevicesDeploymentQueryParams;

  @Metadata()
  security: ListDeployedDevicesDeploymentSecurity;
}


export class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.PreviewDeployedDevicesFleetDeployment })
  deployments?: shared.PreviewDeployedDevicesFleetDeployment[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta;
}


export class ListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeployedDevicesDeploymentResponse?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse;

  @Metadata()
  statusCode: number;
}
