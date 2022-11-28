import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
