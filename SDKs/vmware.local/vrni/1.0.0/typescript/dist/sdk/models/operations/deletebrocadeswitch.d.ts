import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBrocadeSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteBrocadeSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteBrocadeSwitchRequest extends SpeakeasyBase {
    pathParams: DeleteBrocadeSwitchPathParams;
    security: DeleteBrocadeSwitchSecurity;
}
export declare class DeleteBrocadeSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
