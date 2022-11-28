import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PriceBulkUploadsFeedTypeEnum {
    Price = "price",
    CptSellerEligibility = "CPT_SELLER_ELIGIBILITY"
}
export declare class PriceBulkUploadsQueryParams extends SpeakeasyBase {
    feedType: PriceBulkUploadsFeedTypeEnum;
}
export declare class PriceBulkUploadsHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType?: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare class PriceBulkUploadsRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PriceBulkUploadsRequestBody extends SpeakeasyBase {
    file?: PriceBulkUploadsRequestBodyFile;
}
export declare class PriceBulkUploads200ApplicationJson extends SpeakeasyBase {
    additionalAttributes?: Map<string, any>;
    errors?: Map<string, any>;
    feedId?: string;
}
export declare class PriceBulkUploadsRequest extends SpeakeasyBase {
    queryParams: PriceBulkUploadsQueryParams;
    headers: PriceBulkUploadsHeaders;
    request: PriceBulkUploadsRequestBody;
}
export declare class PriceBulkUploadsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    priceBulkUploads200ApplicationJsonObject?: PriceBulkUploads200ApplicationJson;
}
