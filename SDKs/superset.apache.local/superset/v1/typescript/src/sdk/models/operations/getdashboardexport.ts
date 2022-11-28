import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDashboardExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardExport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDashboardExportQueryParams;

  @SpeakeasyMetadata()
  security: GetDashboardExportSecurity;
}


export class GetDashboardExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardExport200TextPlainString?: string;

  @SpeakeasyMetadata()
  getDashboardExport400ApplicationJsonObject?: GetDashboardExport400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardExport401ApplicationJsonObject?: GetDashboardExport401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardExport404ApplicationJsonObject?: GetDashboardExport404ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardExport422ApplicationJsonObject?: GetDashboardExport422ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardExport500ApplicationJsonObject?: GetDashboardExport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
