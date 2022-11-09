import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryPostFileQueryParams extends SpeakeasyBase {
    includeOutline?: boolean;
}
export declare class StoryPostFileRequest extends SpeakeasyBase {
    queryParams: StoryPostFileQueryParams;
    request: any;
}
export declare class StoryPostFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    story?: shared.Story;
}
