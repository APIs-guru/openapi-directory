import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatasetExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDatasetExportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetExportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDatasetExportQueryParams;

  @Metadata()
  security: GetDatasetExportSecurity;
}


export class GetDatasetExport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExport404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatasetExport200TextPlainString?: string;

  @Metadata()
  getDatasetExport400ApplicationJsonObject?: GetDatasetExport400ApplicationJson;

  @Metadata()
  getDatasetExport401ApplicationJsonObject?: GetDatasetExport401ApplicationJson;

  @Metadata()
  getDatasetExport404ApplicationJsonObject?: GetDatasetExport404ApplicationJson;

  @Metadata()
  getDatasetExport500ApplicationJsonObject?: GetDatasetExport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
