import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TeamStatsAllowedByPositionFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamStatsAllowedByPositionPathParams extends SpeakeasyBase {
    format: TeamStatsAllowedByPositionFormatEnum;
    season: string;
}
export declare class TeamStatsAllowedByPositionRequest extends SpeakeasyBase {
    pathParams: TeamStatsAllowedByPositionPathParams;
}
export declare class TeamStatsAllowedByPositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamSeasons?: any[];
}
