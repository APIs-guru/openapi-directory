import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum {
    One00 = "1.0.0"
}
export declare class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams extends SpeakeasyBase {
    key: string;
    versionNumber: number;
    wmtsVersion: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum;
}
export declare class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams;
}
export declare class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
