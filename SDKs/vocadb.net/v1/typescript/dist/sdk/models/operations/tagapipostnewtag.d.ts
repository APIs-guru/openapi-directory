import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagApiPostNewTagQueryParams extends SpeakeasyBase {
    name: string;
}
export declare class TagApiPostNewTagRequest extends SpeakeasyBase {
    queryParams: TagApiPostNewTagQueryParams;
}
export declare class TagApiPostNewTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagBaseContract?: shared.TagBaseContract;
}
