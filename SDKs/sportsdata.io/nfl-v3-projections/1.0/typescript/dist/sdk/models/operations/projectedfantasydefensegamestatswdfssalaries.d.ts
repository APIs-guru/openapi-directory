import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams extends SpeakeasyBase {
    format: ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum;
    season: string;
    week: string;
}
export declare class ProjectedFantasyDefenseGameStatsWDfsSalariesRequest extends SpeakeasyBase {
    pathParams: ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams;
}
export declare class ProjectedFantasyDefenseGameStatsWDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    fantasyDefenseGameProjections?: any[];
    statusCode: number;
}
