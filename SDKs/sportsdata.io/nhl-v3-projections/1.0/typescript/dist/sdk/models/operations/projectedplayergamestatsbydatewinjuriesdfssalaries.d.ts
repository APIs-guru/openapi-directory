import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum;
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
