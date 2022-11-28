import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoryIdEventsPostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdEventsPostRequest extends SpeakeasyBase {
    pathParams: StoryIdEventsPostPathParams;
    request: shared.ManageEvent;
}
export declare class StoryIdEventsPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    storyIdEventsPost200ApplicationJsonObject?: Map<string, any>;
}
