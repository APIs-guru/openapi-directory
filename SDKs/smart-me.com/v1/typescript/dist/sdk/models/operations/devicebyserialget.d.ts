import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeviceBySerialGetQueryParams extends SpeakeasyBase {
    serial: number;
}
export declare class DeviceBySerialGetRequest extends SpeakeasyBase {
    queryParams: DeviceBySerialGetQueryParams;
}
export declare class DeviceBySerialGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
