import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAssetsCsvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsCsvRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportAssetsCsvQueryParams;

  @Metadata()
  security: ExportAssetsCsvSecurity;
}


export class ExportAssetsCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportAssetsCsv200TextCsvBinaryString?: Uint8Array;
}
