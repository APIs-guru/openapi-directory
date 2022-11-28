import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDeployedDevicesCertificateServerList = [
	"https://preview.twilio.com",
] as const;


export class ListDeployedDevicesCertificatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceSid" })
  deviceSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesCertificateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: shared.PreviewDeployedDevicesFleetCertificate })
  certificates?: shared.PreviewDeployedDevicesFleetCertificate[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta;
}


export class ListDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDeployedDevicesCertificatePathParams;

  @SpeakeasyMetadata()
  queryParams: ListDeployedDevicesCertificateQueryParams;

  @SpeakeasyMetadata()
  security: ListDeployedDevicesCertificateSecurity;
}


export class ListDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDeployedDevicesCertificateResponse?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
