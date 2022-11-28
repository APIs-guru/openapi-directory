import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class GetSiteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSitePathParams;

  @SpeakeasyMetadata()
  security: GetSiteSecurity;
}


export class GetSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  site?: shared.Site;

  @SpeakeasyMetadata()
  statusCode: number;
}
