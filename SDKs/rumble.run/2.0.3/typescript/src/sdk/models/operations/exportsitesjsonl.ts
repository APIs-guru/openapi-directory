import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportSitesJsonlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportSitesJsonlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportSitesJsonlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportSitesJsonlQueryParams;

  @Metadata()
  security: ExportSitesJsonlSecurity;
}


export class ExportSitesJsonlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportSitesJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
