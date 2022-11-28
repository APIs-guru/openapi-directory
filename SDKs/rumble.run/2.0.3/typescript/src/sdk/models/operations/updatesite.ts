import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class UpdateSiteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SiteOptions;

  @SpeakeasyMetadata()
  security: UpdateSiteSecurity;
}


export class UpdateSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  site?: shared.Site;

  @SpeakeasyMetadata()
  statusCode: number;
}
