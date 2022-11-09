import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSitesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListSitesRequest extends SpeakeasyBase {
  @Metadata()
  security: ListSitesSecurity;
}


export class ListSitesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSitesResponse?: shared.ListSitesResponse;

  @Metadata()
  statusCode: number;
}
