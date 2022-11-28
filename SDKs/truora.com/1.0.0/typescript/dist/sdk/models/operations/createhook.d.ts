import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateHookSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateHookRequest extends SpeakeasyBase {
    request: shared.CreateHookInput;
    security: CreateHookSecurity;
}
export declare class CreateHookResponse extends SpeakeasyBase {
    contentType: string;
    hook?: shared.Hook;
    statusCode: number;
}
