import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TemplatesFetchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}


export class TemplatesFetchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class TemplatesFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TemplatesFetchPathParams;

  @SpeakeasyMetadata()
  security: TemplatesFetchSecurity;
}


export class TemplatesFetchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  templateResponse?: shared.TemplateResponse;
}
