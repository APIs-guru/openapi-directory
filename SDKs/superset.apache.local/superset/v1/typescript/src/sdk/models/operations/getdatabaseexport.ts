import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabaseExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDatabaseExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabaseExport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseExport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseExport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDatabaseExportQueryParams;

  @SpeakeasyMetadata()
  security: GetDatabaseExportSecurity;
}


export class GetDatabaseExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatabaseExport200ApplicationZipBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getDatabaseExport401ApplicationJsonObject?: GetDatabaseExport401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseExport404ApplicationJsonObject?: GetDatabaseExport404ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseExport500ApplicationJsonObject?: GetDatabaseExport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
