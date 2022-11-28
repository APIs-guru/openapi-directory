import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportAssetsCiscoCsvQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsCiscoCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsCiscoCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportAssetsCiscoCsvQueryParams;

  @SpeakeasyMetadata()
  security: ExportAssetsCiscoCsvSecurity;
}


export class ExportAssetsCiscoCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportAssetsCiscoCsv200TextCsvBinaryString?: Uint8Array;
}
