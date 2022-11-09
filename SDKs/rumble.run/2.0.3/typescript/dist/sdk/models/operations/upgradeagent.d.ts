import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpgradeAgentPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class UpgradeAgentSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpgradeAgentRequest extends SpeakeasyBase {
    pathParams: UpgradeAgentPathParams;
    security: UpgradeAgentSecurity;
}
export declare class UpgradeAgentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
