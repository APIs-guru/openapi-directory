import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportServicesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportServicesJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportServicesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportServicesJsonQueryParams;

  @Metadata()
  security: ExportServicesJsonSecurity;
}


export class ExportServicesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Service })
  services?: shared.Service[];

  @Metadata()
  statusCode: number;
}
