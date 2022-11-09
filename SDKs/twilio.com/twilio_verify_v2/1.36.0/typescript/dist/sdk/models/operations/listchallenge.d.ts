import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCHALLENGE_SERVERS: string[];
export declare class ListChallengePathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
}
export declare class ListChallengeQueryParams extends SpeakeasyBase {
    factorSid?: string;
    order?: shared.ChallengeEnumListOrdersEnum;
    pageSize?: number;
    status?: shared.ChallengeEnumChallengeStatusesEnum;
}
export declare class ListChallengeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListChallengeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListChallengePathParams;
    queryParams: ListChallengeQueryParams;
    security: ListChallengeSecurity;
}
export declare class ListChallengeListChallengeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListChallengeListChallengeResponse extends SpeakeasyBase {
    challenges?: shared.VerifyV2ServiceEntityChallenge[];
    meta?: ListChallengeListChallengeResponseMeta;
}
export declare class ListChallengeResponse extends SpeakeasyBase {
    contentType: string;
    listChallengeResponse?: ListChallengeListChallengeResponse;
    statusCode: number;
}
