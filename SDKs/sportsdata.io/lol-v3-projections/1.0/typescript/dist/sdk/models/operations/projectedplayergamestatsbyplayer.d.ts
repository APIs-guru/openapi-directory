import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerGameStatsByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
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
    playerGameProjections?: any[];
    statusCode: number;
}
