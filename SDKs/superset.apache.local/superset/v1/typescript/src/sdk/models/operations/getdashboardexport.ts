import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDashboardExportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardExportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDashboardExportQueryParams;

  @Metadata()
  security: GetDashboardExportSecurity;
}


export class GetDashboardExport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardExport200TextPlainString?: string;

  @Metadata()
  getDashboardExport400ApplicationJsonObject?: GetDashboardExport400ApplicationJson;

  @Metadata()
  getDashboardExport401ApplicationJsonObject?: GetDashboardExport401ApplicationJson;

  @Metadata()
  getDashboardExport404ApplicationJsonObject?: GetDashboardExport404ApplicationJson;

  @Metadata()
  getDashboardExport422ApplicationJsonObject?: GetDashboardExport422ApplicationJson;

  @Metadata()
  getDashboardExport500ApplicationJsonObject?: GetDashboardExport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
