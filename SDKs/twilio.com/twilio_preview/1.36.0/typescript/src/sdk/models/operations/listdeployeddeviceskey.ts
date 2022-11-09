import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEPLOYEDDEVICESKEY_SERVERS = [
	"https://preview.twilio.com",
];



export class ListDeployedDevicesKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DeviceSid" })
  deviceSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDeployedDevicesKeyPathParams;

  @Metadata()
  queryParams: ListDeployedDevicesKeyQueryParams;

  @Metadata()
  security: ListDeployedDevicesKeySecurity;
}


export class ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesKeyListDeployedDevicesKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keys", elemType: shared.PreviewDeployedDevicesFleetKey })
  keys?: shared.PreviewDeployedDevicesFleetKey[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta;
}


export class ListDeployedDevicesKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeployedDevicesKeyResponse?: ListDeployedDevicesKeyListDeployedDevicesKeyResponse;

  @Metadata()
  statusCode: number;
}
