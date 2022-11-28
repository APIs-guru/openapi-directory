import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerSeasonStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByPlayerPathParams extends SpeakeasyBase {
    format: ProjectedPlayerSeasonStatsByPlayerFormatEnum;
    playerid: string;
    season: string;
}
export declare class ProjectedPlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerSeasonStatsByPlayerPathParams;
}
export declare class ProjectedPlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjection?: any;
    statusCode: number;
}
