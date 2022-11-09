import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAssetsJsonlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsJsonlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsJsonlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportAssetsJsonlQueryParams;

  @Metadata()
  security: ExportAssetsJsonlSecurity;
}


export class ExportAssetsJsonlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportAssetsJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
