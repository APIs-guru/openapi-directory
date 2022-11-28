import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetInvoiceUblPackagingEnum {
    Json = "json",
    Ubl = "ubl"
}
export declare class GetInvoiceUblPathParams extends SpeakeasyBase {
    guid: string;
    packaging: GetInvoiceUblPackagingEnum;
}
export declare class GetInvoiceUblRequest extends SpeakeasyBase {
    pathParams: GetInvoiceUblPathParams;
}
export declare class GetInvoiceUblResponse extends SpeakeasyBase {
    contentType: string;
    purchaseInvoiceUbl?: any;
    statusCode: number;
}
