import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsBySeasonPathParams extends SpeakeasyBase {
    format: string;
    season: string;
}
export declare class TeamsBySeasonRequest extends SpeakeasyBase {
    pathParams: TeamsBySeasonPathParams;
}
export declare class TeamsBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: any[];
}
