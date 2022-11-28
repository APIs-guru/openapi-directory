import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletHookPathParams extends SpeakeasyBase {
    hookId: string;
}
export declare class DeletHookSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeletHookRequest extends SpeakeasyBase {
    pathParams: DeletHookPathParams;
    security: DeletHookSecurity;
}
export declare class DeletHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletHook200ApplicationJsonString?: string;
}
