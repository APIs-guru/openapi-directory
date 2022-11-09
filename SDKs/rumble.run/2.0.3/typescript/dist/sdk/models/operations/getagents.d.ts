import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAgentsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAgentsRequest extends SpeakeasyBase {
    security: GetAgentsSecurity;
}
export declare class GetAgentsResponse extends SpeakeasyBase {
    agents?: shared.Agent[];
    contentType: string;
    statusCode: number;
}
