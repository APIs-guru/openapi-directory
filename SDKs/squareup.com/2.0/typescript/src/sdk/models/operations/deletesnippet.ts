import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSnippetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class DeleteSnippetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteSnippetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSnippetPathParams;

  @Metadata()
  security: DeleteSnippetSecurity;
}


export class DeleteSnippetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteSnippetResponse?: shared.DeleteSnippetResponse;

  @Metadata()
  statusCode: number;
}
