import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    format: ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;
    season: string;
    team: string;
    week: string;
}
export declare class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
