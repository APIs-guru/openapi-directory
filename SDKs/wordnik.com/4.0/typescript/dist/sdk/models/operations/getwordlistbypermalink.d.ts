import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWordListByPermalinkPathParams extends SpeakeasyBase {
    permalink: string;
}
export declare class GetWordListByPermalinkHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class GetWordListByPermalinkRequest extends SpeakeasyBase {
    pathParams: GetWordListByPermalinkPathParams;
    headers: GetWordListByPermalinkHeaders;
}
export declare class GetWordListByPermalinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
