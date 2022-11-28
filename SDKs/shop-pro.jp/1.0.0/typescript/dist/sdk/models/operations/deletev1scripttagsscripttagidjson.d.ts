import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteV1ScriptTagsScriptTagIdJsonPathParams extends SpeakeasyBase {
    scriptTagId: number;
}
export declare class DeleteV1ScriptTagsScriptTagIdJsonSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteV1ScriptTagsScriptTagIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteV1ScriptTagsScriptTagIdJsonPathParams;
    security: DeleteV1ScriptTagsScriptTagIdJsonSecurity;
}
export declare class DeleteV1ScriptTagsScriptTagIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
