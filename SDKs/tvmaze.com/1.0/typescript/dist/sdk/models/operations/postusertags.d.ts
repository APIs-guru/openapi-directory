import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserTagsRequest extends SpeakeasyBase {
    request?: shared.TagInput;
}
export declare class PostUserTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
