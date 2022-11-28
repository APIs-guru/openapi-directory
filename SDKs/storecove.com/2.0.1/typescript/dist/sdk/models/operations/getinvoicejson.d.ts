import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInvoiceJsonPathParams extends SpeakeasyBase {
    guid: string;
}
export declare class GetInvoiceJsonQueryParams extends SpeakeasyBase {
    pmv?: string;
}
export declare class GetInvoiceJsonRequest extends SpeakeasyBase {
    pathParams: GetInvoiceJsonPathParams;
    queryParams: GetInvoiceJsonQueryParams;
}
export declare class GetInvoiceJsonResponse extends SpeakeasyBase {
    contentType: string;
    purchaseInvoice?: any;
    statusCode: number;
}
