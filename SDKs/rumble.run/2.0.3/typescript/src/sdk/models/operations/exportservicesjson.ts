import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportServicesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportServicesJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportServicesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportServicesJsonQueryParams;

  @SpeakeasyMetadata()
  security: ExportServicesJsonSecurity;
}


export class ExportServicesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Service })
  services?: shared.Service[];

  @SpeakeasyMetadata()
  statusCode: number;
}
