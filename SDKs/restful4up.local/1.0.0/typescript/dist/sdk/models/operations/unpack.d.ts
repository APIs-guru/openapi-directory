import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UnpackRequest extends SpeakeasyBase {
    request: any;
}
export declare class UnpackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unpack200WildcardBinaryString?: Uint8Array;
}
