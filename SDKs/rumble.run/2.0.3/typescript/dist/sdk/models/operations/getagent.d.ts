import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAgentPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class GetAgentSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAgentRequest extends SpeakeasyBase {
    pathParams: GetAgentPathParams;
    security: GetAgentSecurity;
}
export declare class GetAgentResponse extends SpeakeasyBase {
    agent?: shared.Agent;
    contentType: string;
    statusCode: number;
}
