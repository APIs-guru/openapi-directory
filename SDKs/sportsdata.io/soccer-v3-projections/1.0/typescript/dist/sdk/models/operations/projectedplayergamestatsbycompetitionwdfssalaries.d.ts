import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams extends SpeakeasyBase {
    competition: string;
    date: string;
    format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum;
}
export declare class ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams;
}
export declare class ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
