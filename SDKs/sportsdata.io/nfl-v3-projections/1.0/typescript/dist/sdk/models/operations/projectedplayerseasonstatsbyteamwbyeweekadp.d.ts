import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams extends SpeakeasyBase {
    format: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum;
    season: string;
    team: string;
}
export declare class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams;
}
export declare class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: any[];
    statusCode: number;
}
