import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserTagsTagIdShowsShowIdPathParams extends SpeakeasyBase {
    showId: number;
    tagId: number;
}
export declare class PutUserTagsTagIdShowsShowIdRequest extends SpeakeasyBase {
    pathParams: PutUserTagsTagIdShowsShowIdPathParams;
}
export declare class PutUserTagsTagIdShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagInstance?: shared.TagInstance;
}
