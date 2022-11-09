import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateWordListPathParams extends SpeakeasyBase {
    permalink: string;
}
export declare class UpdateWordListHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class UpdateWordListRequest extends SpeakeasyBase {
    pathParams: UpdateWordListPathParams;
    headers: UpdateWordListHeaders;
    request?: any;
}
export declare class UpdateWordListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
