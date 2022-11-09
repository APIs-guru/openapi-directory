import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAssetsCiscoCsvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsCiscoCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsCiscoCsvRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportAssetsCiscoCsvQueryParams;

  @Metadata()
  security: ExportAssetsCiscoCsvSecurity;
}


export class ExportAssetsCiscoCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportAssetsCiscoCsv200TextCsvBinaryString?: Uint8Array;
}
