import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminRequestsQueryParams extends SpeakeasyBase {
    limit?: string;
    since?: string;
}
export declare class GetAdminRequestsRequest extends SpeakeasyBase {
    queryParams: GetAdminRequestsQueryParams;
}
export declare class GetAdminRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
