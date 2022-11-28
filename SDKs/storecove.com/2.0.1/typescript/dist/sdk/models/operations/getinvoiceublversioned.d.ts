import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetInvoiceUblVersionedPackageVersionEnum {
    Original = "original",
    Si11 = "si11",
    Si12 = "si12",
    Si20 = "si20",
    Aunz = "aunz",
    Sg = "sg"
}
export declare enum GetInvoiceUblVersionedPackagingEnum {
    Ubl = "ubl"
}
export declare class GetInvoiceUblVersionedPathParams extends SpeakeasyBase {
    guid: string;
    packageVersion: GetInvoiceUblVersionedPackageVersionEnum;
    packaging: GetInvoiceUblVersionedPackagingEnum;
}
export declare class GetInvoiceUblVersionedRequest extends SpeakeasyBase {
    pathParams: GetInvoiceUblVersionedPathParams;
}
export declare class GetInvoiceUblVersionedResponse extends SpeakeasyBase {
    contentType: string;
    purchaseInvoiceUbl?: any;
    statusCode: number;
}
