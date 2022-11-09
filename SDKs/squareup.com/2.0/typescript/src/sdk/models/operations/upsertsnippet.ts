import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpsertSnippetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class UpsertSnippetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpsertSnippetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpsertSnippetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpsertSnippetRequest;

  @Metadata()
  security: UpsertSnippetSecurity;
}


export class UpsertSnippetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  upsertSnippetResponse?: shared.UpsertSnippetResponse;
}
