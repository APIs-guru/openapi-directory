import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    format: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;
    season: string;
    week: string;
}
export declare class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
