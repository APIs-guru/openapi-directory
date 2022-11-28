import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerGameStatsDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameStatsDeltaPathParams extends SpeakeasyBase {
    format: PlayerGameStatsDeltaFormatEnum;
    minutes: string;
}
export declare class PlayerGameStatsDeltaRequest extends SpeakeasyBase {
    pathParams: PlayerGameStatsDeltaPathParams;
}
export declare class PlayerGameStatsDeltaResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: any[];
    statusCode: number;
}
