import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SnowExportAssetsCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SnowExportAssetsCsvRequest extends SpeakeasyBase {
  @Metadata()
  security: SnowExportAssetsCsvSecurity;
}


export class SnowExportAssetsCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  snowExportAssetsCsv200TextCsvBinaryString?: Uint8Array;
}
