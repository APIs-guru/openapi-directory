import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportSitesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportSitesJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportSitesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportSitesJsonQueryParams;

  @SpeakeasyMetadata()
  security: ExportSitesJsonSecurity;
}


export class ExportSitesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Site })
  sites?: shared.Site[];

  @SpeakeasyMetadata()
  statusCode: number;
}
