import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class RemoveSiteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveSitePathParams;

  @SpeakeasyMetadata()
  security: RemoveSiteSecurity;
}


export class RemoveSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
