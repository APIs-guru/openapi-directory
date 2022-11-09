import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TeamSeasonStatsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class TeamSeasonStatsPathParams extends SpeakeasyBase {
    format: TeamSeasonStatsFormatEnum;
    roundid: string;
}
export declare class TeamSeasonStatsRequest extends SpeakeasyBase {
    pathParams: TeamSeasonStatsPathParams;
}
export declare class TeamSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamSeasons?: any[];
}
