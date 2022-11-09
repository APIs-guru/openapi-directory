import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FindUserByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FindUserByIdQueryParams extends SpeakeasyBase {
    expansions?: shared.UserExpansionsParameterEnum[];
    mediaFields?: shared.MediaFieldsParameterEnum[];
    placeFields?: shared.PlaceFieldsParameterEnum[];
    pollFields?: shared.PollFieldsParameterEnum[];
    tweetFields?: shared.TweetFieldsParameterEnum[];
    userFields?: shared.UserFieldsParameterEnum[];
}
export declare class FindUserByIdRequest extends SpeakeasyBase {
    pathParams: FindUserByIdPathParams;
    queryParams: FindUserByIdQueryParams;
}
export declare class FindUserByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    singleUserLookupResponse?: shared.SingleUserLookupResponse;
    statusCode: number;
}
