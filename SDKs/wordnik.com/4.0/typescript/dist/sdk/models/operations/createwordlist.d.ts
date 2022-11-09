import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateWordListHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class CreateWordListRequest extends SpeakeasyBase {
    headers: CreateWordListHeaders;
    request?: any;
}
export declare class CreateWordListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
