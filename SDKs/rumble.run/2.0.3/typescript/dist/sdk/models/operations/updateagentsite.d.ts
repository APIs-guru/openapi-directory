import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAgentSitePathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class UpdateAgentSiteSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateAgentSiteRequest extends SpeakeasyBase {
    pathParams: UpdateAgentSitePathParams;
    request: shared.AgentSiteId;
    security: UpdateAgentSiteSecurity;
}
export declare class UpdateAgentSiteResponse extends SpeakeasyBase {
    agent?: shared.Agent;
    contentType: string;
    statusCode: number;
}
