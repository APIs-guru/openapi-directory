import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookingPricingmatrixHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingPricingmatrixRequestBody extends SpeakeasyBase {
    bookingDate?: string;
    currencyCode?: string;
    productCode?: string;
    tourGradeCode?: string;
}
export declare class BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices extends SpeakeasyBase {
    currencyCode?: string;
    merchantNetPrice?: number;
    merchantNetPriceFormatted?: string;
    minNoOfTravellersRequiredForPrice?: number;
    price?: number;
    priceFormatted?: string;
    sortOrder?: string;
}
export declare class BookingPricingmatrix200ApplicationJsonDataAgeBandPrices extends SpeakeasyBase {
    bandId?: number;
    maximumCountRequired?: number;
    minimumCountRequired?: number;
    prices?: BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices[];
    sortOrder?: number;
}
export declare class BookingPricingmatrix200ApplicationJsonData extends SpeakeasyBase {
    ageBandPrices?: BookingPricingmatrix200ApplicationJsonDataAgeBandPrices[];
    bookingDate?: string;
    pricingUnit?: string;
    sortOrder?: number;
}
export declare class BookingPricingmatrix200ApplicationJson extends SpeakeasyBase {
    data?: BookingPricingmatrix200ApplicationJsonData[];
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Map<string, any>;
    extraObject?: Map<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class BookingPricingmatrixRequest extends SpeakeasyBase {
    headers: BookingPricingmatrixHeaders;
    request?: BookingPricingmatrixRequestBody;
}
export declare class BookingPricingmatrixResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingPricingmatrix200ApplicationJsonObject?: BookingPricingmatrix200ApplicationJson;
}
