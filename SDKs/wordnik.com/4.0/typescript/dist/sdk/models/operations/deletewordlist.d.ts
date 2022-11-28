import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWordListPathParams extends SpeakeasyBase {
    permalink: string;
}
export declare class DeleteWordListHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class DeleteWordListRequest extends SpeakeasyBase {
    pathParams: DeleteWordListPathParams;
    headers: DeleteWordListHeaders;
}
export declare class DeleteWordListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
