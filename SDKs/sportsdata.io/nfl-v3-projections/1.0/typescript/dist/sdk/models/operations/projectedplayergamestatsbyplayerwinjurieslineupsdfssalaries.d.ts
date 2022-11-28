import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    format: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;
    playerid: string;
    season: string;
    week: string;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjection?: any;
    statusCode: number;
}
