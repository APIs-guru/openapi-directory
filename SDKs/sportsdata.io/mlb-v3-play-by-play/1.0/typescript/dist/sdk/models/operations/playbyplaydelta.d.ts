import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayByPlayDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayByPlayDeltaPathParams extends SpeakeasyBase {
    date: string;
    format: PlayByPlayDeltaFormatEnum;
    minutes: string;
}
export declare class PlayByPlayDeltaRequest extends SpeakeasyBase {
    pathParams: PlayByPlayDeltaPathParams;
}
export declare class PlayByPlayDeltaResponse extends SpeakeasyBase {
    contentType: string;
    playByPlays?: any[];
    statusCode: number;
}
