import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LikeStoryPathParams extends SpeakeasyBase {
    storyId: string;
}
export declare class LikeStoryQueryParams extends SpeakeasyBase {
    devicePixelRatio?: number;
}
export declare class LikeStoryRequest extends SpeakeasyBase {
    pathParams: LikeStoryPathParams;
    queryParams: LikeStoryQueryParams;
}
export declare class LikeStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    story?: shared.Story;
}
