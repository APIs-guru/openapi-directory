import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveSnippetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class RetrieveSnippetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveSnippetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveSnippetPathParams;

  @Metadata()
  security: RetrieveSnippetSecurity;
}


export class RetrieveSnippetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveSnippetResponse?: shared.RetrieveSnippetResponse;

  @Metadata()
  statusCode: number;
}
