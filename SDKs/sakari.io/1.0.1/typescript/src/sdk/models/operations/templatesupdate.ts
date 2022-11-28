import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TemplatesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}


export class TemplatesUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class TemplatesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TemplatesUpdatePathParams;

  @SpeakeasyMetadata()
  security: TemplatesUpdateSecurity;
}


export class TemplatesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  templateResponse?: shared.TemplateResponse;
}
