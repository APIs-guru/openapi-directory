import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindUsersByUsernameQueryParams extends SpeakeasyBase {
    expansions?: shared.UserExpansionsParameterEnum[];
    mediaFields?: shared.MediaFieldsParameterEnum[];
    placeFields?: shared.PlaceFieldsParameterEnum[];
    pollFields?: shared.PollFieldsParameterEnum[];
    tweetFields?: shared.TweetFieldsParameterEnum[];
    userFields?: shared.UserFieldsParameterEnum[];
    usernames: string[];
}
export declare class FindUsersByUsernameRequest extends SpeakeasyBase {
    queryParams: FindUsersByUsernameQueryParams;
}
export declare class FindUsersByUsernameResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    statusCode: number;
    userLookupResponse?: shared.UserLookupResponse;
}
