import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTESIMPROFILE_SERVERS: string[];
export declare class ListEsimProfileQueryParams extends SpeakeasyBase {
    eid?: string;
    pageSize?: number;
    simSid?: string;
    status?: shared.EsimProfileEnumStatusEnum;
}
export declare class ListEsimProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEsimProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListEsimProfileQueryParams;
    security: ListEsimProfileSecurity;
}
export declare class ListEsimProfileListEsimProfileResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEsimProfileListEsimProfileResponse extends SpeakeasyBase {
    esimProfiles?: shared.SupersimV1EsimProfile[];
    meta?: ListEsimProfileListEsimProfileResponseMeta;
}
export declare class ListEsimProfileResponse extends SpeakeasyBase {
    contentType: string;
    listEsimProfileResponse?: ListEsimProfileListEsimProfileResponse;
    statusCode: number;
}
