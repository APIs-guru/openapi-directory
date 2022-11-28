import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableNsxvManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableNsxvManagerRequest extends SpeakeasyBase {
    pathParams: EnableNsxvManagerPathParams;
    security: EnableNsxvManagerSecurity;
}
export declare class EnableNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
