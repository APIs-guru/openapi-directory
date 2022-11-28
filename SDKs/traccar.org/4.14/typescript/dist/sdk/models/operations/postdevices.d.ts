import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDevicesRequest extends SpeakeasyBase {
    request: shared.Device;
}
export declare class PostDevicesResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
