import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum;
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
