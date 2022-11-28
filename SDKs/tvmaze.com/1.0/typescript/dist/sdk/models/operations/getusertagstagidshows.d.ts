import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserTagsTagIdShowsPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare enum GetUserTagsTagIdShowsEmbedEnum {
    Show = "show"
}
export declare class GetUserTagsTagIdShowsQueryParams extends SpeakeasyBase {
    embed?: GetUserTagsTagIdShowsEmbedEnum;
}
export declare class GetUserTagsTagIdShowsRequest extends SpeakeasyBase {
    pathParams: GetUserTagsTagIdShowsPathParams;
    queryParams: GetUserTagsTagIdShowsQueryParams;
}
export declare class GetUserTagsTagIdShowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagInstances?: shared.TagInstance[];
}
