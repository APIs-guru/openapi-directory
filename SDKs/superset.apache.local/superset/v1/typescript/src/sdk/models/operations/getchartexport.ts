import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetChartExportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartExportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChartExportQueryParams;

  @Metadata()
  security: GetChartExportSecurity;
}


export class GetChartExport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExport404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChartExport200ApplicationZipBinaryString?: Uint8Array;

  @Metadata()
  getChartExport400ApplicationJsonObject?: GetChartExport400ApplicationJson;

  @Metadata()
  getChartExport401ApplicationJsonObject?: GetChartExport401ApplicationJson;

  @Metadata()
  getChartExport404ApplicationJsonObject?: GetChartExport404ApplicationJson;

  @Metadata()
  getChartExport500ApplicationJsonObject?: GetChartExport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
