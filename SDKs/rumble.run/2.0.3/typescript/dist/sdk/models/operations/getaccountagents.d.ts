import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountAgentsQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetAccountAgentsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountAgentsRequest extends SpeakeasyBase {
    queryParams: GetAccountAgentsQueryParams;
    security: GetAccountAgentsSecurity;
}
export declare class GetAccountAgentsResponse extends SpeakeasyBase {
    agents?: shared.Agent[];
    contentType: string;
    statusCode: number;
}
