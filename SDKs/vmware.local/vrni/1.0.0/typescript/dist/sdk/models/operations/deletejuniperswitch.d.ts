import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteJuniperSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteJuniperSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteJuniperSwitchRequest extends SpeakeasyBase {
    pathParams: DeleteJuniperSwitchPathParams;
    security: DeleteJuniperSwitchSecurity;
}
export declare class DeleteJuniperSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
