import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayByPlayFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayByPlayPathParams extends SpeakeasyBase {
    format: PlayByPlayFormatEnum;
    gameid: string;
}
export declare class PlayByPlayRequest extends SpeakeasyBase {
    pathParams: PlayByPlayPathParams;
}
export declare class PlayByPlayResponse extends SpeakeasyBase {
    contentType: string;
    playByPlay?: any;
    statusCode: number;
}
