import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DevicesPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    deviceToPost?: shared.DeviceToPost;
    deviceToPost1?: shared.DeviceToPost;
    deviceToPost2?: shared.DeviceToPost;
    textXml: Uint8Array;
}
export declare class DevicesPostRequest extends SpeakeasyBase {
    request: DevicesPostRequests;
}
export declare class DevicesPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceToPost?: shared.DeviceToPost;
    statusCode: number;
}
