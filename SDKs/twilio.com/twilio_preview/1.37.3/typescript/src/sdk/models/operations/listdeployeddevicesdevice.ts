import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDeployedDevicesDeviceServerList = [
	"https://preview.twilio.com",
] as const;


export class ListDeployedDevicesDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeploymentSid" })
  deploymentSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: shared.PreviewDeployedDevicesFleetDevice })
  devices?: shared.PreviewDeployedDevicesFleetDevice[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta;
}


export class ListDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDeployedDevicesDevicePathParams;

  @SpeakeasyMetadata()
  queryParams: ListDeployedDevicesDeviceQueryParams;

  @SpeakeasyMetadata()
  security: ListDeployedDevicesDeviceSecurity;
}


export class ListDeployedDevicesDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDeployedDevicesDeviceResponse?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
