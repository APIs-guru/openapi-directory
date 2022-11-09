import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetGroupsQueryParams extends SpeakeasyBase {
    direction?: GetGroupsDirectionEnum;
    limit?: number;
    page?: string;
    sort?: string;
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    queryParams: GetGroupsQueryParams;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
