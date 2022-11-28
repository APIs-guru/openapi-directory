import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerGameStatsByWeekDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameStatsByWeekDeltaPathParams extends SpeakeasyBase {
    format: PlayerGameStatsByWeekDeltaFormatEnum;
    minutes: string;
    season: string;
    week: string;
}
export declare class PlayerGameStatsByWeekDeltaRequest extends SpeakeasyBase {
    pathParams: PlayerGameStatsByWeekDeltaPathParams;
}
export declare class PlayerGameStatsByWeekDeltaResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: any[];
    statusCode: number;
}
