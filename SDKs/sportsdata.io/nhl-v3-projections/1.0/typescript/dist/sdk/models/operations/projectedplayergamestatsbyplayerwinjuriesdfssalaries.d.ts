import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum;
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjection?: any;
    statusCode: number;
}
