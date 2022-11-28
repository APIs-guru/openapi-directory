import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDeployedDevicesDeploymentServerList = [
	"https://preview.twilio.com",
] as const;


export class ListDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesDeploymentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: shared.PreviewDeployedDevicesFleetDeployment })
  deployments?: shared.PreviewDeployedDevicesFleetDeployment[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta;
}


export class ListDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDeployedDevicesDeploymentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDeployedDevicesDeploymentQueryParams;

  @SpeakeasyMetadata()
  security: ListDeployedDevicesDeploymentSecurity;
}


export class ListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDeployedDevicesDeploymentResponse?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
