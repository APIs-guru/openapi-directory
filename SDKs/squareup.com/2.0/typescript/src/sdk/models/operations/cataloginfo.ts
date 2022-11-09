import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CatalogInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CatalogInfoRequest extends SpeakeasyBase {
  @Metadata()
  security: CatalogInfoSecurity;
}


export class CatalogInfoResponse extends SpeakeasyBase {
  @Metadata()
  catalogInfoResponse?: shared.CatalogInfoResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
