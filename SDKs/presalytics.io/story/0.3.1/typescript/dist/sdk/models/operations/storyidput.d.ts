import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdPutPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdPutQueryParams extends SpeakeasyBase {
    includeOutline?: boolean;
}
export declare class StoryIdPutRequest extends SpeakeasyBase {
    pathParams: StoryIdPutPathParams;
    queryParams: StoryIdPutQueryParams;
    request: shared.Story;
}
export declare class StoryIdPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    story?: shared.Story;
}
