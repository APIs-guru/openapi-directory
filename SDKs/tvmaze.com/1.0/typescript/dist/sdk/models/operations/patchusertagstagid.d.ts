import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchUserTagsTagIdPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class PatchUserTagsTagIdRequest extends SpeakeasyBase {
    pathParams: PatchUserTagsTagIdPathParams;
    request?: shared.TagInput;
}
export declare class PatchUserTagsTagIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
