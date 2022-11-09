import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHESIMPROFILE_SERVERS: string[];
export declare class FetchEsimProfilePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchEsimProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEsimProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEsimProfilePathParams;
    security: FetchEsimProfileSecurity;
}
export declare class FetchEsimProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1EsimProfile?: shared.SupersimV1EsimProfile;
}
