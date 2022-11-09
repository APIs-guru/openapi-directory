import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class UpdateSiteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateSiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSitePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SiteOptions;

  @Metadata()
  security: UpdateSiteSecurity;
}


export class UpdateSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  site?: shared.Site;

  @Metadata()
  statusCode: number;
}
