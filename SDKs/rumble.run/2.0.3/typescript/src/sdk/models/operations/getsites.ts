import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSitesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetSitesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetSitesSecurity;
}


export class GetSitesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Site })
  sites?: shared.Site[];

  @Metadata()
  statusCode: number;
}
