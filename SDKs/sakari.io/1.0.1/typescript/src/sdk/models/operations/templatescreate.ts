import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TemplatesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class TemplatesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class TemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TemplatesCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TemplateRequest;

  @SpeakeasyMetadata()
  security: TemplatesCreateSecurity;
}


export class TemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  templatesResponse?: shared.TemplatesResponse;
}
