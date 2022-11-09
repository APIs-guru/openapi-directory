import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEPLOYEDDEVICESDEVICE_SERVERS = [
	"https://preview.twilio.com",
];



export class ListDeployedDevicesDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DeploymentSid" })
  deploymentSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDeployedDevicesDevicePathParams;

  @Metadata()
  queryParams: ListDeployedDevicesDeviceQueryParams;

  @Metadata()
  security: ListDeployedDevicesDeviceSecurity;
}


export class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.PreviewDeployedDevicesFleetDevice })
  devices?: shared.PreviewDeployedDevicesFleetDevice[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta;
}


export class ListDeployedDevicesDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeployedDevicesDeviceResponse?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse;

  @Metadata()
  statusCode: number;
}
