import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDriversQueryParams extends SpeakeasyBase {
    all?: boolean;
    deviceId?: number;
    groupId?: number;
    refresh?: boolean;
    userId?: number;
}
export declare class GetDriversRequest extends SpeakeasyBase {
    queryParams: GetDriversQueryParams;
}
export declare class GetDriversResponse extends SpeakeasyBase {
    contentType: string;
    drivers?: shared.Driver[];
    statusCode: number;
}
