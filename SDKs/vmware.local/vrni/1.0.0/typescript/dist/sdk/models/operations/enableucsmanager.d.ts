import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableUcsManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableUcsManagerRequest extends SpeakeasyBase {
    pathParams: EnableUcsManagerPathParams;
    security: EnableUcsManagerSecurity;
}
export declare class EnableUcsManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
