import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeterValuesGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MeterValuesGetQueryParams extends SpeakeasyBase {
    date: Date;
}
export declare class MeterValuesGetRequest extends SpeakeasyBase {
    pathParams: MeterValuesGetPathParams;
    queryParams: MeterValuesGetQueryParams;
}
export declare class MeterValuesGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceInPast?: shared.DeviceInPast;
    statusCode: number;
}
