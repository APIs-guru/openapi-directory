import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdGetQueryParams extends SpeakeasyBase {
    full?: boolean;
    includeOutline?: boolean;
    includeRelationships?: boolean;
    refreshCache?: boolean;
}
export declare class StoryIdGetRequest extends SpeakeasyBase {
    pathParams: StoryIdGetPathParams;
    queryParams: StoryIdGetQueryParams;
}
export declare class StoryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    story?: shared.Story;
}
