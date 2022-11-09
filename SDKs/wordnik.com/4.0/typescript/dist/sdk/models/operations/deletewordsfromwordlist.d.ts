import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteWordsFromWordListPathParams extends SpeakeasyBase {
    permalink: string;
}
export declare class DeleteWordsFromWordListHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class DeleteWordsFromWordListRequest extends SpeakeasyBase {
    pathParams: DeleteWordsFromWordListPathParams;
    headers: DeleteWordsFromWordListHeaders;
    request?: any[];
}
export declare class DeleteWordsFromWordListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
