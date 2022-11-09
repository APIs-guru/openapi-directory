import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StoryIdOutlineGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdOutlineGetRequest extends SpeakeasyBase {
    pathParams: StoryIdOutlineGetPathParams;
}
export declare class StoryIdOutlineGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    status?: any;
    storyIdOutlineGet200ApplicationJsonString?: string;
}
