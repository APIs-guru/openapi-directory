import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ProjectedPlayerGameStatsByDateWDfsSalariesPathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum;
}
export declare class ProjectedPlayerGameStatsByDateWDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByDateWDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByDateWDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
