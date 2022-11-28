import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerGameStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByPlayerPathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByPlayerFormatEnum;
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByPlayerPathParams;
}
export declare class ProjectedPlayerGameStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjection?: any;
    statusCode: number;
}
