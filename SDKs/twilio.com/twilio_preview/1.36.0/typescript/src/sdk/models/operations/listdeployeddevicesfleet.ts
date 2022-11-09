import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEPLOYEDDEVICESFLEET_SERVERS = [
	"https://preview.twilio.com",
];



export class ListDeployedDevicesFleetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesFleetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesFleetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListDeployedDevicesFleetQueryParams;

  @Metadata()
  security: ListDeployedDevicesFleetSecurity;
}


export class ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesFleetListDeployedDevicesFleetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleets", elemType: shared.PreviewDeployedDevicesFleet })
  fleets?: shared.PreviewDeployedDevicesFleet[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta;
}


export class ListDeployedDevicesFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeployedDevicesFleetResponse?: ListDeployedDevicesFleetListDeployedDevicesFleetResponse;

  @Metadata()
  statusCode: number;
}
