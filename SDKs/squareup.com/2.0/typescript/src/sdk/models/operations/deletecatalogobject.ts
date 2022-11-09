import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCatalogObjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=object_id" })
  objectId: string;
}


export class DeleteCatalogObjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteCatalogObjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCatalogObjectPathParams;

  @Metadata()
  security: DeleteCatalogObjectSecurity;
}


export class DeleteCatalogObjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCatalogObjectResponse?: shared.DeleteCatalogObjectResponse;

  @Metadata()
  statusCode: number;
}
