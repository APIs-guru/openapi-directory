import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsWByeWeekAdpPathParams extends SpeakeasyBase {
    format: ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum;
    season: string;
}
export declare class ProjectedPlayerSeasonStatsWByeWeekAdpRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerSeasonStatsWByeWeekAdpPathParams;
}
export declare class ProjectedPlayerSeasonStatsWByeWeekAdpResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: any[];
    statusCode: number;
}
