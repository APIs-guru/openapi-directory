import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteV1ScriptTagsScriptTagIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}


export class DeleteV1ScriptTagsScriptTagIdJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteV1ScriptTagsScriptTagIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteV1ScriptTagsScriptTagIdJsonPathParams;

  @Metadata()
  security: DeleteV1ScriptTagsScriptTagIdJsonSecurity;
}


export class DeleteV1ScriptTagsScriptTagIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
