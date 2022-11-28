import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaxRatesByIpAddressQueryParams extends SpeakeasyBase {
    domain?: string;
    filter?: string;
    ip?: string;
    productCode?: string;
    zip?: string;
}
export declare class TaxRatesByIpAddress200ApplicationJsonTaxes extends SpeakeasyBase {
    country?: string;
    type?: string;
    dataName?: string;
    dataValue?: string;
}
export declare class TaxRatesByIpAddress200ApplicationJson extends SpeakeasyBase {
    countryName?: string;
    taxes?: TaxRatesByIpAddress200ApplicationJsonTaxes[];
}
export declare class TaxRatesByIpAddress500ApplicationJson extends SpeakeasyBase {
    code?: string;
    fields?: string;
    message?: string;
}
export declare class TaxRatesByIpAddressRequest extends SpeakeasyBase {
    queryParams: TaxRatesByIpAddressQueryParams;
}
export declare class TaxRatesByIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxRatesByIpAddress200ApplicationJsonObjects?: TaxRatesByIpAddress200ApplicationJson[];
    taxRatesByIpAddress500ApplicationJsonObject?: TaxRatesByIpAddress500ApplicationJson;
}
