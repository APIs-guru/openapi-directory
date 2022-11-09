import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveCatalogObjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=object_id" })
  objectId: string;
}


export class RetrieveCatalogObjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_related_objects" })
  includeRelatedObjects?: boolean;
}


export class RetrieveCatalogObjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveCatalogObjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveCatalogObjectPathParams;

  @Metadata()
  queryParams: RetrieveCatalogObjectQueryParams;

  @Metadata()
  security: RetrieveCatalogObjectSecurity;
}


export class RetrieveCatalogObjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveCatalogObjectResponse?: shared.RetrieveCatalogObjectResponse;

  @Metadata()
  statusCode: number;
}
