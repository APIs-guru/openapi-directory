import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoryIdEventsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdEventsGetRequest extends SpeakeasyBase {
    pathParams: StoryIdEventsGetPathParams;
}
export declare class StoryIdEventsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
    problemDetail?: any;
}
