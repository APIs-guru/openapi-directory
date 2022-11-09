import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FindUserByUsernamePathParams extends SpeakeasyBase {
    username: string;
}
export declare class FindUserByUsernameQueryParams extends SpeakeasyBase {
    expansions?: shared.UserExpansionsParameterEnum[];
    mediaFields?: shared.MediaFieldsParameterEnum[];
    placeFields?: shared.PlaceFieldsParameterEnum[];
    pollFields?: shared.PollFieldsParameterEnum[];
    tweetFields?: shared.TweetFieldsParameterEnum[];
    userFields?: shared.UserFieldsParameterEnum[];
}
export declare class FindUserByUsernameRequest extends SpeakeasyBase {
    pathParams: FindUserByUsernamePathParams;
    queryParams: FindUserByUsernameQueryParams;
}
export declare class FindUserByUsernameResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    singleUserLookupResponse?: shared.SingleUserLookupResponse;
    statusCode: number;
}
