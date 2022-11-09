import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSiteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class CreateSiteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SiteOptions;

  @Metadata()
  security: CreateSiteSecurity;
}


export class CreateSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  site?: shared.Site;

  @Metadata()
  statusCode: number;
}
