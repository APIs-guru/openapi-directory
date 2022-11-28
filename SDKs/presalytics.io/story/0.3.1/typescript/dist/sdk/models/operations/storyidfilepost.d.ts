import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoryIdFilePostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdFilePostQueryParams extends SpeakeasyBase {
    includeOutline?: boolean;
    obsoleteId?: string;
    replaceExisting?: boolean;
}
export declare class StoryIdFilePostRequest extends SpeakeasyBase {
    pathParams: StoryIdFilePostPathParams;
    queryParams: StoryIdFilePostQueryParams;
    request: any;
}
export declare class StoryIdFilePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    story?: shared.Story;
}
