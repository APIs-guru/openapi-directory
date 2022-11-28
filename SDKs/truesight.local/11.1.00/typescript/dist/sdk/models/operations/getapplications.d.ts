import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetApplicationsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetApplicationsQueryParams extends SpeakeasyBase {
    direction?: GetApplicationsDirectionEnum;
    limit?: number;
    page?: string;
    sort?: string;
}
export declare class GetApplicationsRequest extends SpeakeasyBase {
    queryParams: GetApplicationsQueryParams;
}
export declare class GetApplicationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
