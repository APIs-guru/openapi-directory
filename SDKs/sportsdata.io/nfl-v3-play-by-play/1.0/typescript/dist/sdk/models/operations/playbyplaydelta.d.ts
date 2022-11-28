import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayByPlayDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayByPlayDeltaPathParams extends SpeakeasyBase {
    format: PlayByPlayDeltaFormatEnum;
    minutes: string;
    season: string;
    week: string;
}
export declare class PlayByPlayDeltaRequest extends SpeakeasyBase {
    pathParams: PlayByPlayDeltaPathParams;
}
export declare class PlayByPlayDeltaResponse extends SpeakeasyBase {
    contentType: string;
    playByPlays?: any[];
    statusCode: number;
}
