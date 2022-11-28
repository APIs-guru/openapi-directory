import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectedPlayerGameStatsByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ProjectedPlayerGameStatsByDatePathParams extends SpeakeasyBase {
    date: string;
    format: ProjectedPlayerGameStatsByDateFormatEnum;
}
export declare class ProjectedPlayerGameStatsByDateRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerGameStatsByDatePathParams;
}
export declare class ProjectedPlayerGameStatsByDateResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
