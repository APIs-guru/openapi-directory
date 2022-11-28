import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportAssetsCsvQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportAssetsCsvQueryParams;

  @SpeakeasyMetadata()
  security: ExportAssetsCsvSecurity;
}


export class ExportAssetsCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportAssetsCsv200TextCsvBinaryString?: Uint8Array;
}
