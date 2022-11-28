import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDellSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteDellSwitchRequest extends SpeakeasyBase {
    pathParams: DeleteDellSwitchPathParams;
    security: DeleteDellSwitchSecurity;
}
export declare class DeleteDellSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
