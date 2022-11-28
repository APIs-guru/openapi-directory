import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatasetExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDatasetExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetExport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDatasetExportQueryParams;

  @SpeakeasyMetadata()
  security: GetDatasetExportSecurity;
}


export class GetDatasetExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatasetExport200TextPlainString?: string;

  @SpeakeasyMetadata()
  getDatasetExport400ApplicationJsonObject?: GetDatasetExport400ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetExport401ApplicationJsonObject?: GetDatasetExport401ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetExport404ApplicationJsonObject?: GetDatasetExport404ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetExport500ApplicationJsonObject?: GetDatasetExport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
