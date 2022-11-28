import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteV1ScriptTagsScriptTagIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}


export class DeleteV1ScriptTagsScriptTagIdJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteV1ScriptTagsScriptTagIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1ScriptTagsScriptTagIdJsonPathParams;

  @SpeakeasyMetadata()
  security: DeleteV1ScriptTagsScriptTagIdJsonSecurity;
}


export class DeleteV1ScriptTagsScriptTagIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
