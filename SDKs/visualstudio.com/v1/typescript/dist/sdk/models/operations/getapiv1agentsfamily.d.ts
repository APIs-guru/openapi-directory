import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1AgentsFamilyPathParams extends SpeakeasyBase {
    family: string;
}
export declare class GetApiV1AgentsFamilyRequest extends SpeakeasyBase {
    pathParams: GetApiV1AgentsFamilyPathParams;
}
export declare class GetApiV1AgentsFamilyResponse extends SpeakeasyBase {
    agentResponse?: shared.AgentResponse;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
