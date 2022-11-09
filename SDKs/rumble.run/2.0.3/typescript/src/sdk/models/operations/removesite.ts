import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class RemoveSiteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveSiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveSitePathParams;

  @Metadata()
  security: RemoveSiteSecurity;
}


export class RemoveSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
