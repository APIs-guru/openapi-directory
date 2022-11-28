import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SessionsIdViewsPostPathParams extends SpeakeasyBase {
    sessionId: string;
}
/**
 * A page view required a page number from the story outline to be created
**/
export declare class SessionsIdViewsPostRequiredParametersToCreateAView extends SpeakeasyBase {
    activeMSecs?: number;
    additional?: string;
    endTime: Date;
    pageNumber: number;
    startTime: Date;
}
export declare class SessionsIdViewsPostRequest extends SpeakeasyBase {
    pathParams: SessionsIdViewsPostPathParams;
    request: SessionsIdViewsPostRequiredParametersToCreateAView;
}
export declare class SessionsIdViewsPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    view?: shared.View;
}
