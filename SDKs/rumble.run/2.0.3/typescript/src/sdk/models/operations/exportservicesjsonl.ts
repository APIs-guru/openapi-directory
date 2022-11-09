import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportServicesJsonlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportServicesJsonlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportServicesJsonlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportServicesJsonlQueryParams;

  @Metadata()
  security: ExportServicesJsonlSecurity;
}


export class ExportServicesJsonlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportServicesJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
