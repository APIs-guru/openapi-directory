import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWordListWordsPathParams extends SpeakeasyBase {
    permalink: string;
}
export declare enum GetWordListWordsSortByEnum {
    CreateDate = "createDate",
    Alpha = "alpha"
}
export declare class GetWordListWordsQueryParams extends SpeakeasyBase {
    limit?: number;
    skip?: number;
    sortBy?: GetWordListWordsSortByEnum;
    sortOrder?: string;
}
export declare class GetWordListWordsHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class GetWordListWordsRequest extends SpeakeasyBase {
    pathParams: GetWordListWordsPathParams;
    queryParams: GetWordListWordsQueryParams;
    headers: GetWordListWordsHeaders;
}
export declare class GetWordListWordsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
