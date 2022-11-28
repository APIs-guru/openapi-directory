import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IdpFantasyPlayersWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class IdpFantasyPlayersWithAdpPathParams extends SpeakeasyBase {
    format: IdpFantasyPlayersWithAdpFormatEnum;
}
export declare class IdpFantasyPlayersWithAdpRequest extends SpeakeasyBase {
    pathParams: IdpFantasyPlayersWithAdpPathParams;
}
export declare class IdpFantasyPlayersWithAdpResponse extends SpeakeasyBase {
    contentType: string;
    fantasyPlayers?: any[];
    statusCode: number;
}
