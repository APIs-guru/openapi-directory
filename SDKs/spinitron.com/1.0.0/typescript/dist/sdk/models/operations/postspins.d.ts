import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSpinsRequestBody extends SpeakeasyBase {
    artist: string;
    composer?: string;
    duration?: number;
    genre?: string;
    isrc?: string;
    label?: string;
    live?: boolean;
    release?: string;
    song: string;
    start?: Date;
}
export declare class PostSpinsRequest extends SpeakeasyBase {
    request?: PostSpinsRequestBody;
}
export declare class PostSpinsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    spin?: shared.Spin;
    statusCode: number;
    validationErrors?: shared.ValidationError[];
}
