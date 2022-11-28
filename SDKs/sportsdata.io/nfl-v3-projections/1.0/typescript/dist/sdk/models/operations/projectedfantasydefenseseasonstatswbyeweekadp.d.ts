import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams extends SpeakeasyBase {
    format: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum;
    season: string;
}
export declare class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest extends SpeakeasyBase {
    pathParams: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams;
}
export declare class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse extends SpeakeasyBase {
    contentType: string;
    fantasyDefenseSeasonProjections?: any[];
    statusCode: number;
}
