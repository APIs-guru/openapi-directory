import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTagsTagTopAnswerersPeriodPeriodEnum {
    AllTime = "all_time",
    Month = "month"
}
export declare class GetTagsTagTopAnswerersPeriodPathParams extends SpeakeasyBase {
    period: GetTagsTagTopAnswerersPeriodPeriodEnum;
    tag: string;
}
export declare class GetTagsTagTopAnswerersPeriodQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetTagsTagTopAnswerersPeriodRequest extends SpeakeasyBase {
    pathParams: GetTagsTagTopAnswerersPeriodPathParams;
    queryParams: GetTagsTagTopAnswerersPeriodQueryParams;
}
export declare class GetTagsTagTopAnswerersPeriodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
