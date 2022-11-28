import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindTweetsByIdQueryParams extends SpeakeasyBase {
    expansions?: shared.TweetExpansionsParameterEnum[];
    ids: string[];
    mediaFields?: shared.MediaFieldsParameterEnum[];
    placeFields?: shared.PlaceFieldsParameterEnum[];
    pollFields?: shared.PollFieldsParameterEnum[];
    tweetFields?: shared.TweetFieldsParameterEnum[];
    userFields?: shared.UserFieldsParameterEnum[];
}
export declare class FindTweetsByIdRequest extends SpeakeasyBase {
    queryParams: FindTweetsByIdQueryParams;
}
export declare class FindTweetsByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    statusCode: number;
    tweetLookupResponse?: shared.TweetLookupResponse;
}
