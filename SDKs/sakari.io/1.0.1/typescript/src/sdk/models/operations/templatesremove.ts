import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TemplatesRemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}


export class TemplatesRemoveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class TemplatesRemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TemplatesRemovePathParams;

  @Metadata()
  security: TemplatesRemoveSecurity;
}


export class TemplatesRemove200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class TemplatesRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  templatesRemove200ApplicationJsonObject?: TemplatesRemove200ApplicationJson;
}
