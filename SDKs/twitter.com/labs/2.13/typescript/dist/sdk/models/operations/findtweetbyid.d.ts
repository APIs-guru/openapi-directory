import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindTweetByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FindTweetByIdQueryParams extends SpeakeasyBase {
    expansions?: shared.TweetExpansionsParameterEnum[];
    mediaFields?: shared.MediaFieldsParameterEnum[];
    placeFields?: shared.PlaceFieldsParameterEnum[];
    pollFields?: shared.PollFieldsParameterEnum[];
    tweetFields?: shared.TweetFieldsParameterEnum[];
    userFields?: shared.UserFieldsParameterEnum[];
}
export declare class FindTweetByIdRequest extends SpeakeasyBase {
    pathParams: FindTweetByIdPathParams;
    queryParams: FindTweetByIdQueryParams;
}
export declare class FindTweetByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    singleTweetLookupResponse?: shared.SingleTweetLookupResponse;
    statusCode: number;
}
