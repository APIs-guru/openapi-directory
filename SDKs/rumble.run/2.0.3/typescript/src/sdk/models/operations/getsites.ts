import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSitesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetSitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetSitesSecurity;
}


export class GetSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Site })
  sites?: shared.Site[];

  @SpeakeasyMetadata()
  statusCode: number;
}
