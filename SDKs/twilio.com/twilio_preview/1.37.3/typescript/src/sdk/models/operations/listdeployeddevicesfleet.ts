import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDeployedDevicesFleetServerList = [
	"https://preview.twilio.com",
] as const;


export class ListDeployedDevicesFleetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesFleetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesFleetListDeployedDevicesFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fleets", elemType: shared.PreviewDeployedDevicesFleet })
  fleets?: shared.PreviewDeployedDevicesFleet[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta;
}


export class ListDeployedDevicesFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListDeployedDevicesFleetQueryParams;

  @SpeakeasyMetadata()
  security: ListDeployedDevicesFleetSecurity;
}


export class ListDeployedDevicesFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDeployedDevicesFleetResponse?: ListDeployedDevicesFleetListDeployedDevicesFleetResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
