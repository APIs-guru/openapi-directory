import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TeamGameStatsByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class TeamGameStatsByDatePathParams extends SpeakeasyBase {
    date: string;
    format: TeamGameStatsByDateFormatEnum;
}
export declare class TeamGameStatsByDateRequest extends SpeakeasyBase {
    pathParams: TeamGameStatsByDatePathParams;
}
export declare class TeamGameStatsByDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamGames?: any[];
}
