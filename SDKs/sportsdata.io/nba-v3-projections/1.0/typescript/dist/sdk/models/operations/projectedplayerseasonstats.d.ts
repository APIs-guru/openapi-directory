import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsPathParams extends SpeakeasyBase {
    format: ProjectedPlayerSeasonStatsFormatEnum;
    season: string;
}
export declare class ProjectedPlayerSeasonStatsRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerSeasonStatsPathParams;
}
export declare class ProjectedPlayerSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: any[];
    statusCode: number;
}
