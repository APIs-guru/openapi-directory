import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveAgentPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class RemoveAgentSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveAgentRequest extends SpeakeasyBase {
    pathParams: RemoveAgentPathParams;
    security: RemoveAgentSecurity;
}
export declare class RemoveAgentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
