import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FantasyPlayersWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class FantasyPlayersWithAdpPathParams extends SpeakeasyBase {
    format: FantasyPlayersWithAdpFormatEnum;
}
export declare class FantasyPlayersWithAdpRequest extends SpeakeasyBase {
    pathParams: FantasyPlayersWithAdpPathParams;
}
export declare class FantasyPlayersWithAdpResponse extends SpeakeasyBase {
    contentType: string;
    fantasyPlayers?: any[];
    statusCode: number;
}
