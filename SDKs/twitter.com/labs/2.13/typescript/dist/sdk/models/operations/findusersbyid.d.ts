import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FindUsersByIdQueryParams extends SpeakeasyBase {
    expansions?: shared.UserExpansionsParameterEnum[];
    ids: string[];
    mediaFields?: shared.MediaFieldsParameterEnum[];
    placeFields?: shared.PlaceFieldsParameterEnum[];
    pollFields?: shared.PollFieldsParameterEnum[];
    tweetFields?: shared.TweetFieldsParameterEnum[];
    userFields?: shared.UserFieldsParameterEnum[];
}
export declare class FindUsersByIdRequest extends SpeakeasyBase {
    queryParams: FindUsersByIdQueryParams;
}
export declare class FindUsersByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    statusCode: number;
    userLookupResponse?: shared.UserLookupResponse;
}
