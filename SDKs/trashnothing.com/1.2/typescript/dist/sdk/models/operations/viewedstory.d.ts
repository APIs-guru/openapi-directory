import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ViewedStoryPathParams extends SpeakeasyBase {
    storyId: string;
}
export declare class ViewedStorySecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class ViewedStoryRequest extends SpeakeasyBase {
    pathParams: ViewedStoryPathParams;
    security: ViewedStorySecurity;
}
export declare class ViewedStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
