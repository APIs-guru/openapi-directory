import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByTeamPathParams extends SpeakeasyBase {
    format: ProjectedPlayerSeasonStatsByTeamFormatEnum;
    season: string;
    team: string;
}
export declare class ProjectedPlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerSeasonStatsByTeamPathParams;
}
export declare class ProjectedPlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: any[];
    statusCode: number;
}
