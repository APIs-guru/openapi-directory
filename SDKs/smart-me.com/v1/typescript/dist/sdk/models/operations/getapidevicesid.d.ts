import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiDevicesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiDevicesIdRequest extends SpeakeasyBase {
    pathParams: GetApiDevicesIdPathParams;
}
export declare class GetApiDevicesIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
