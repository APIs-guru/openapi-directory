import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDevicesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetDevicesQueryParams extends SpeakeasyBase {
    applicationId?: string;
    direction?: GetDevicesDirectionEnum;
    groupId?: string;
    limit?: number;
    page?: string;
    serviceId?: string;
    sort?: string;
}
export declare class GetDevicesRequest extends SpeakeasyBase {
    queryParams: GetDevicesQueryParams;
}
export declare class GetDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
