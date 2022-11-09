import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}


export class TemplatesUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class TemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TemplatesUpdatePathParams;

  @Metadata()
  security: TemplatesUpdateSecurity;
}


export class TemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  templateResponse?: shared.TemplateResponse;
}
