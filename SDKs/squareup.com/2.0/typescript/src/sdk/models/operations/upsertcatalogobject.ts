import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpsertCatalogObjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpsertCatalogObjectRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpsertCatalogObjectRequest;

  @Metadata()
  security: UpsertCatalogObjectSecurity;
}


export class UpsertCatalogObjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  upsertCatalogObjectResponse?: shared.UpsertCatalogObjectResponse;
}
