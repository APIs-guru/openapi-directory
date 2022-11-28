import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDevicesIdAccumulatorsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutDevicesIdAccumulatorsRequest extends SpeakeasyBase {
    pathParams: PutDevicesIdAccumulatorsPathParams;
    request: shared.DeviceAccumulators;
}
export declare class PutDevicesIdAccumulatorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
