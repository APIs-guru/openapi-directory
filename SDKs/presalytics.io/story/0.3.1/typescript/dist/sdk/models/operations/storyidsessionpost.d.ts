import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoryIdSessionPostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdSessionPostRequest extends SpeakeasyBase {
    pathParams: StoryIdSessionPostPathParams;
    request: any;
}
export declare class StoryIdSessionPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    session?: shared.Session;
}
