import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AddWordsToWordListPathParams extends SpeakeasyBase {
    permalink: string;
}
export declare class AddWordsToWordListHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class AddWordsToWordListRequest extends SpeakeasyBase {
    pathParams: AddWordsToWordListPathParams;
    headers: AddWordsToWordListHeaders;
    request?: any[];
}
export declare class AddWordsToWordListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
