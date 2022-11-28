import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingQueryParams extends SpeakeasyBase {
    country?: string;
    format?: string;
}
export declare class PricingRequest extends SpeakeasyBase {
    queryParams: PricingQueryParams;
}
export declare class PricingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
