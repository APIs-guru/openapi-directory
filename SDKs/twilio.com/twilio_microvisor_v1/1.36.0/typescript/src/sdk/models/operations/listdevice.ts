import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEVICE_SERVERS = [
	"https://microvisor.twilio.com",
];



export class ListDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeviceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListDeviceQueryParams;

  @Metadata()
  security: ListDeviceSecurity;
}


export class ListDeviceListDeviceResponseMeta extends SpeakeasyBase {
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


export class ListDeviceListDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.MicrovisorV1Device })
  devices?: shared.MicrovisorV1Device[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDeviceListDeviceResponseMeta;
}


export class ListDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeviceResponse?: ListDeviceListDeviceResponse;

  @Metadata()
  statusCode: number;
}
