import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductPhotosQueryParams extends SpeakeasyBase {
    code?: string;
    showUnavailable?: boolean;
    topX?: string;
}
export declare class ProductPhotosHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class ProductPhotos200ApplicationJson extends SpeakeasyBase {
    data?: shared.PhotoObject[];
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
export declare class ProductPhotosRequest extends SpeakeasyBase {
    queryParams: ProductPhotosQueryParams;
    headers: ProductPhotosHeaders;
}
export declare class ProductPhotosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    productPhotos200ApplicationJsonObject?: ProductPhotos200ApplicationJson;
}
