import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TagsReadRequest extends SpeakeasyBase {
    pathParams: TagsReadPathParams;
}
export declare class TagsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagSingle?: shared.TagSingle;
}
