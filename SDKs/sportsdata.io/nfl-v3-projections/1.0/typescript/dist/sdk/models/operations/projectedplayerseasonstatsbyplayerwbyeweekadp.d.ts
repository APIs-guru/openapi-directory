import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams extends SpeakeasyBase {
    format: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum;
    playerid: string;
    season: string;
}
export declare class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams;
}
export declare class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjection?: any;
    statusCode: number;
}
