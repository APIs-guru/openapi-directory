import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerGameStatsByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameStatsByWeekPathParams extends SpeakeasyBase {
    format: PlayerGameStatsByWeekFormatEnum;
    season: string;
    week: string;
}
export declare class PlayerGameStatsByWeekRequest extends SpeakeasyBase {
    pathParams: PlayerGameStatsByWeekPathParams;
}
export declare class PlayerGameStatsByWeekResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: any[];
    statusCode: number;
}
