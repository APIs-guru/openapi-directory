import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventStatusPathParams extends SpeakeasyBase {
    eventKey: string;
    teamKey: string;
}
export declare class GetTeamEventStatusHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventStatusSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventStatusRequest extends SpeakeasyBase {
    pathParams: GetTeamEventStatusPathParams;
    headers: GetTeamEventStatusHeaders;
    security: GetTeamEventStatusSecurity;
}
export declare class GetTeamEventStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamEventStatus?: shared.TeamEventStatus;
}
