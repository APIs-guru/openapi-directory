import { SpeakeasyBase } from "../../../internal/utils";
export declare enum XPingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class XPingPathParams extends SpeakeasyBase {
    format: XPingFormatEnum;
    seconds: string;
}
export declare class XPingRequest extends SpeakeasyBase {
    pathParams: XPingPathParams;
}
export declare class XPingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    xPing200ApplicationJsonAny?: any;
}
