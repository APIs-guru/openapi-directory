import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTagsTagTopAskersPeriodPeriodEnum {
    AllTime = "all_time",
    Month = "month"
}
export declare class GetTagsTagTopAskersPeriodPathParams extends SpeakeasyBase {
    period: GetTagsTagTopAskersPeriodPeriodEnum;
    tag: string;
}
export declare class GetTagsTagTopAskersPeriodQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetTagsTagTopAskersPeriodRequest extends SpeakeasyBase {
    pathParams: GetTagsTagTopAskersPeriodPathParams;
    queryParams: GetTagsTagTopAskersPeriodQueryParams;
}
export declare class GetTagsTagTopAskersPeriodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
