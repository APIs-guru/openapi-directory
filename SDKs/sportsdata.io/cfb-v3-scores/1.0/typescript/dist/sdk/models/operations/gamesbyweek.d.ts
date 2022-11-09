import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GamesByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class GamesByWeekPathParams extends SpeakeasyBase {
    format: GamesByWeekFormatEnum;
    season: string;
    week: string;
}
export declare class GamesByWeekRequest extends SpeakeasyBase {
    pathParams: GamesByWeekPathParams;
}
export declare class GamesByWeekResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
