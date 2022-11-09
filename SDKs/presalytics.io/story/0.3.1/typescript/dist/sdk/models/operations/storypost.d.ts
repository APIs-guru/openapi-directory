import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryPostQueryParams extends SpeakeasyBase {
    includeOutline?: boolean;
}
export declare class StoryPostRequest extends SpeakeasyBase {
    queryParams: StoryPostQueryParams;
    request: any;
}
export declare class StoryPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    story?: shared.Story;
}
