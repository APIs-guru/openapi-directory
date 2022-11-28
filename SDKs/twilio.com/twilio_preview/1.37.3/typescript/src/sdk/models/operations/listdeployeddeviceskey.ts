import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDeployedDevicesKeyServerList = [
	"https://preview.twilio.com",
] as const;


export class ListDeployedDevicesKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceSid" })
  deviceSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesKeyListDeployedDevicesKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys", elemType: shared.PreviewDeployedDevicesFleetKey })
  keys?: shared.PreviewDeployedDevicesFleetKey[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta;
}


export class ListDeployedDevicesKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDeployedDevicesKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDeployedDevicesKeyQueryParams;

  @SpeakeasyMetadata()
  security: ListDeployedDevicesKeySecurity;
}


export class ListDeployedDevicesKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDeployedDevicesKeyResponse?: ListDeployedDevicesKeyListDeployedDevicesKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
