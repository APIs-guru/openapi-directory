import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteInlineScriptTagPathParams extends SpeakeasyBase {
    inlineScriptTagId: number;
}
export declare class DeleteInlineScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteInlineScriptTagRequest extends SpeakeasyBase {
    pathParams: DeleteInlineScriptTagPathParams;
    security: DeleteInlineScriptTagSecurity;
}
export declare class DeleteInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
