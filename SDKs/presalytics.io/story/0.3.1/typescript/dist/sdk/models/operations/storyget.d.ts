import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryGetQueryParams extends SpeakeasyBase {
    includeOutline?: boolean;
    includeRelationships?: boolean;
}
export declare class StoryGetRequest extends SpeakeasyBase {
    queryParams: StoryGetQueryParams;
}
export declare class StoryGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    stories?: shared.Story[];
}
