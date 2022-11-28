import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCiscoSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteCiscoSwitchRequest extends SpeakeasyBase {
    pathParams: DeleteCiscoSwitchPathParams;
    security: DeleteCiscoSwitchSecurity;
}
export declare class DeleteCiscoSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
