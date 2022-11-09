import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryPostFileJsonQueryParams extends SpeakeasyBase {
    includeOutline?: boolean;
}
export declare class StoryPostFileJsonRequest extends SpeakeasyBase {
    queryParams: StoryPostFileJsonQueryParams;
    request?: any;
}
export declare class StoryPostFileJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    story?: shared.Story;
}
