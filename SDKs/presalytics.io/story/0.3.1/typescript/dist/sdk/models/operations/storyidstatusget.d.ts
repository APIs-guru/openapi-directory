import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StoryIdStatusGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdStatusGetRequest extends SpeakeasyBase {
    pathParams: StoryIdStatusGetPathParams;
}
export declare class StoryIdStatusGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    status?: any;
}
