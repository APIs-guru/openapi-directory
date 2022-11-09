import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFACTOR_SERVERS: string[];
export declare class ListFactorPathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
}
export declare class ListFactorQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFactorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFactorRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFactorPathParams;
    queryParams: ListFactorQueryParams;
    security: ListFactorSecurity;
}
export declare class ListFactorListFactorResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFactorListFactorResponse extends SpeakeasyBase {
    factors?: shared.VerifyV2ServiceEntityFactor[];
    meta?: ListFactorListFactorResponseMeta;
}
export declare class ListFactorResponse extends SpeakeasyBase {
    contentType: string;
    listFactorResponse?: ListFactorListFactorResponse;
    statusCode: number;
}
