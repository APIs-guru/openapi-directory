import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StoryIdMessagesPostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdMessagesPostRequest extends SpeakeasyBase {
    pathParams: StoryIdMessagesPostPathParams;
    request: string;
}
export declare class StoryIdMessagesPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
}
