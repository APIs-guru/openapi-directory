import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamRobotsPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamRobotsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamRobotsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamRobotsRequest extends SpeakeasyBase {
    pathParams: GetTeamRobotsPathParams;
    headers: GetTeamRobotsHeaders;
    security: GetTeamRobotsSecurity;
}
export declare class GetTeamRobotsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamRobots?: shared.TeamRobot[];
}
