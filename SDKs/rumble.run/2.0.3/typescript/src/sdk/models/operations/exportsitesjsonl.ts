import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportSitesJsonlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportSitesJsonlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportSitesJsonlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportSitesJsonlQueryParams;

  @SpeakeasyMetadata()
  security: ExportSitesJsonlSecurity;
}


export class ExportSitesJsonlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportSitesJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
