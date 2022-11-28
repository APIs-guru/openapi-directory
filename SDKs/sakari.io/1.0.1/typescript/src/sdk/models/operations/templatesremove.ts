import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TemplatesRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}


export class TemplatesRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class TemplatesRemove200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class TemplatesRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TemplatesRemovePathParams;

  @SpeakeasyMetadata()
  security: TemplatesRemoveSecurity;
}


export class TemplatesRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  templatesRemove200ApplicationJsonObject?: TemplatesRemove200ApplicationJson;
}
