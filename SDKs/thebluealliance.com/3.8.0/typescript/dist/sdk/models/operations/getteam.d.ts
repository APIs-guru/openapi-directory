import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamRequest extends SpeakeasyBase {
    pathParams: GetTeamPathParams;
    headers: GetTeamHeaders;
    security: GetTeamSecurity;
}
export declare class GetTeamResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    team?: shared.Team;
}
