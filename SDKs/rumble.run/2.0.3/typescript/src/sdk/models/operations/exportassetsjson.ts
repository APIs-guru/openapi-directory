import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAssetsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportAssetsJsonQueryParams;

  @Metadata()
  security: ExportAssetsJsonSecurity;
}


export class ExportAssetsJsonResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Asset })
  assets?: shared.Asset[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
