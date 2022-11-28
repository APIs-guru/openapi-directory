import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllTaxRatesQueryParams extends SpeakeasyBase {
    productCode?: string;
    cursor?: string;
    domain?: string;
    filter?: string;
}
export declare class AllTaxRates200ApplicationJsonRates extends SpeakeasyBase {
    dataName?: string;
    dataValue?: string;
    productCode?: string;
    type?: string;
}
export declare class AllTaxRates200ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    rates?: AllTaxRates200ApplicationJsonRates[];
    state?: string;
    zip?: string;
}
export declare class AllTaxRates500ApplicationJson extends SpeakeasyBase {
    code?: string;
    fields?: string;
    message?: string;
}
export declare class AllTaxRatesRequest extends SpeakeasyBase {
    queryParams: AllTaxRatesQueryParams;
}
export declare class AllTaxRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    allTaxRates200ApplicationJsonObjects?: AllTaxRates200ApplicationJson[];
    allTaxRates500ApplicationJsonObject?: AllTaxRates500ApplicationJson;
}
