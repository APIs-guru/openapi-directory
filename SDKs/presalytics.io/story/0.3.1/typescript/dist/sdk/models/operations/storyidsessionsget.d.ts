import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdSessionsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdSessionsGetQueryParams extends SpeakeasyBase {
    includeRelationships?: boolean;
}
export declare class StoryIdSessionsGetRequest extends SpeakeasyBase {
    pathParams: StoryIdSessionsGetPathParams;
    queryParams: StoryIdSessionsGetQueryParams;
}
export declare class StoryIdSessionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    sessions?: shared.Session[];
}
