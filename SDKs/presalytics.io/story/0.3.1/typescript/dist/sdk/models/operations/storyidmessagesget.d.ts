import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StoryIdMessagesGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdMessagesGetRequest extends SpeakeasyBase {
    pathParams: StoryIdMessagesGetPathParams;
}
export declare class StoryIdMessagesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messages?: any[];
    problemDetail?: any;
}
