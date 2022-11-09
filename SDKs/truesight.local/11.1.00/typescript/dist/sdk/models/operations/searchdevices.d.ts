import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchDevicesQueryParams extends SpeakeasyBase {
    applicationId?: string;
    groupId?: string;
    limit?: number;
    page?: string;
    searchTerms: string;
    serviceId?: string;
}
export declare class SearchDevicesRequest extends SpeakeasyBase {
    queryParams: SearchDevicesQueryParams;
}
export declare class SearchDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
