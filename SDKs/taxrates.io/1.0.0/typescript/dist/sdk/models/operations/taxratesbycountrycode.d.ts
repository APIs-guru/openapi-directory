import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaxRatesByCountryCodeQueryParams extends SpeakeasyBase {
    countryCode?: string;
    date?: string;
    domain?: string;
    filter?: string;
    productCodes?: string;
    province?: string;
    zip?: string;
}
export declare class TaxRatesByCountryCode200ApplicationJsonTaxes extends SpeakeasyBase {
    country?: string;
    type?: string;
    dataName?: string;
    dataValue?: string;
}
export declare class TaxRatesByCountryCode200ApplicationJson extends SpeakeasyBase {
    countryName?: string;
    taxes?: TaxRatesByCountryCode200ApplicationJsonTaxes[];
}
export declare class TaxRatesByCountryCode500ApplicationJson extends SpeakeasyBase {
    code?: string;
    fields?: string;
    message?: string;
}
export declare class TaxRatesByCountryCodeRequest extends SpeakeasyBase {
    queryParams: TaxRatesByCountryCodeQueryParams;
}
export declare class TaxRatesByCountryCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxRatesByCountryCode200ApplicationJsonObject?: TaxRatesByCountryCode200ApplicationJson;
    taxRatesByCountryCode500ApplicationJsonObject?: TaxRatesByCountryCode500ApplicationJson;
}
