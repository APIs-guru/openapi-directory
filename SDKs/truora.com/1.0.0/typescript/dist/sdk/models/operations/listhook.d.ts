import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHookSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ListHookRequest extends SpeakeasyBase {
    security: ListHookSecurity;
}
export declare class ListHookResponse extends SpeakeasyBase {
    contentType: string;
    hookOutput?: shared.HookOutput;
    statusCode: number;
}
