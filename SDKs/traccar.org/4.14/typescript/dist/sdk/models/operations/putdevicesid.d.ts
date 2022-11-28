import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDevicesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutDevicesIdRequest extends SpeakeasyBase {
    pathParams: PutDevicesIdPathParams;
    request: shared.Device;
}
export declare class PutDevicesIdResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
