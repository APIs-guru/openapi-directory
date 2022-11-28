import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetChartExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartExport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChartExportQueryParams;

  @SpeakeasyMetadata()
  security: GetChartExportSecurity;
}


export class GetChartExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartExport200ApplicationZipBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getChartExport400ApplicationJsonObject?: GetChartExport400ApplicationJson;

  @SpeakeasyMetadata()
  getChartExport401ApplicationJsonObject?: GetChartExport401ApplicationJson;

  @SpeakeasyMetadata()
  getChartExport404ApplicationJsonObject?: GetChartExport404ApplicationJson;

  @SpeakeasyMetadata()
  getChartExport500ApplicationJsonObject?: GetChartExport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
