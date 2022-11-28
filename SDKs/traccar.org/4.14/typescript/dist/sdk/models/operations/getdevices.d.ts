import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicesQueryParams extends SpeakeasyBase {
    all?: boolean;
    id?: number;
    uniqueId?: string;
    userId?: number;
}
export declare class GetDevicesRequest extends SpeakeasyBase {
    queryParams: GetDevicesQueryParams;
}
export declare class GetDevicesResponse extends SpeakeasyBase {
    contentType: string;
    devices?: shared.Device[];
    statusCode: number;
}
