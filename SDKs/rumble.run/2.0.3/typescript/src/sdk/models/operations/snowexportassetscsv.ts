import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SnowExportAssetsCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SnowExportAssetsCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SnowExportAssetsCsvSecurity;
}


export class SnowExportAssetsCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  snowExportAssetsCsv200TextCsvBinaryString?: Uint8Array;
}
