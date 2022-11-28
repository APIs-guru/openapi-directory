import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateHookPathParams extends SpeakeasyBase {
    hookId: string;
}
export declare class UpdateHookSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateHookRequest extends SpeakeasyBase {
    pathParams: UpdateHookPathParams;
    request: shared.CreateHookInput;
    security: UpdateHookSecurity;
}
export declare class UpdateHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
}
