import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishedEarlyDayMotionGetPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PublishedEarlyDayMotionGetRequest extends SpeakeasyBase {
    pathParams: PublishedEarlyDayMotionGetPathParams;
}
export declare class PublishedEarlyDayMotionGetResponse extends SpeakeasyBase {
    apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;
    apiResponseObject?: shared.ApiResponseObject;
    contentType: string;
    statusCode: number;
}
