import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayersPathParams extends SpeakeasyBase {
    format: PlayersFormatEnum;
}
export declare class PlayersRequest extends SpeakeasyBase {
    pathParams: PlayersPathParams;
}
export declare class PlayersResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
