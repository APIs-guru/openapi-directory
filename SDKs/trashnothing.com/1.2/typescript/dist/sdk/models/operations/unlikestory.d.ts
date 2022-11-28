import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnlikeStoryPathParams extends SpeakeasyBase {
    storyId: string;
}
export declare class UnlikeStoryQueryParams extends SpeakeasyBase {
    devicePixelRatio?: number;
}
export declare class UnlikeStoryRequest extends SpeakeasyBase {
    pathParams: UnlikeStoryPathParams;
    queryParams: UnlikeStoryQueryParams;
}
export declare class UnlikeStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    story?: shared.Story;
}
