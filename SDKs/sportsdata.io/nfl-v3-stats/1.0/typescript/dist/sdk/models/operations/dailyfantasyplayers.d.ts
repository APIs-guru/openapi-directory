import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DailyFantasyPlayersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DailyFantasyPlayersPathParams extends SpeakeasyBase {
    date: string;
    format: DailyFantasyPlayersFormatEnum;
}
export declare class DailyFantasyPlayersRequest extends SpeakeasyBase {
    pathParams: DailyFantasyPlayersPathParams;
}
export declare class DailyFantasyPlayersResponse extends SpeakeasyBase {
    contentType: string;
    dailyFantasyPlayers?: any[];
    statusCode: number;
}
