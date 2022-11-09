import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDEPLOYEDDEVICESCERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
];



export class ListDeployedDevicesCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class ListDeployedDevicesCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DeviceSid" })
  deviceSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDeployedDevicesCertificateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDeployedDevicesCertificatePathParams;

  @Metadata()
  queryParams: ListDeployedDevicesCertificateQueryParams;

  @Metadata()
  security: ListDeployedDevicesCertificateSecurity;
}


export class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta extends SpeakeasyBase {
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


export class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.PreviewDeployedDevicesFleetCertificate })
  certificates?: shared.PreviewDeployedDevicesFleetCertificate[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta;
}


export class ListDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeployedDevicesCertificateResponse?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse;

  @Metadata()
  statusCode: number;
}
