import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventTeamsPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventTeamsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventTeamsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventTeamsRequest extends SpeakeasyBase {
    pathParams: GetEventTeamsPathParams;
    headers: GetEventTeamsHeaders;
    security: GetEventTeamsSecurity;
}
export declare class GetEventTeamsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teams?: shared.Team[];
}
