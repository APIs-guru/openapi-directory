import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableHpovManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableHpovManagerRequest extends SpeakeasyBase {
    pathParams: EnableHpovManagerPathParams;
    security: EnableHpovManagerSecurity;
}
export declare class EnableHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
