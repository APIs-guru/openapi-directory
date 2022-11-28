import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetServicesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetServicesQueryParams extends SpeakeasyBase {
    direction?: GetServicesDirectionEnum;
    limit?: number;
    page?: string;
    sort?: string;
}
export declare class GetServicesRequest extends SpeakeasyBase {
    queryParams: GetServicesQueryParams;
}
export declare class GetServicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
