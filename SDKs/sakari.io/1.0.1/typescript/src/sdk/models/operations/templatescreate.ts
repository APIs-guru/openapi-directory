import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TemplatesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class TemplatesCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class TemplatesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TemplatesCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.TemplateRequest;

  @Metadata()
  security: TemplatesCreateSecurity;
}


export class TemplatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  templatesResponse?: shared.TemplatesResponse;
}
