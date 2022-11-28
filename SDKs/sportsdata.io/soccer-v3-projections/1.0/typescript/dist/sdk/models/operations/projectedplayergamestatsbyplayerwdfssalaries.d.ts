import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum;
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
