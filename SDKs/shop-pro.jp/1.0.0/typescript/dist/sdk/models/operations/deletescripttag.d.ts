import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteScriptTagPathParams extends SpeakeasyBase {
    scriptTagId: number;
}
export declare class DeleteScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteScriptTagRequest extends SpeakeasyBase {
    pathParams: DeleteScriptTagPathParams;
    security: DeleteScriptTagSecurity;
}
export declare class DeleteScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
