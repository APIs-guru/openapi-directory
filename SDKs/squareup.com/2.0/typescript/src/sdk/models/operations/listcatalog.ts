import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCatalogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=types" })
  types?: string;
}


export class ListCatalogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListCatalogRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCatalogQueryParams;

  @Metadata()
  security: ListCatalogSecurity;
}


export class ListCatalogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCatalogResponse?: shared.ListCatalogResponse;

  @Metadata()
  statusCode: number;
}
