import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetHeatingMarginCoverageDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetHeatingMarginCoverageQueryParams extends SpeakeasyBase {
    applicationId?: string;
    covered?: boolean;
    direction?: GetHeatingMarginCoverageDirectionEnum;
    groupId?: string;
    limit?: number;
    page?: string;
    serviceId?: string;
    sort?: string;
}
export declare class GetHeatingMarginCoverageRequest extends SpeakeasyBase {
    queryParams: GetHeatingMarginCoverageQueryParams;
}
export declare class GetHeatingMarginCoverageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
