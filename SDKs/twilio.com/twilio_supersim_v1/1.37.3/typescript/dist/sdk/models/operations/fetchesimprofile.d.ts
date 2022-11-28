import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEsimProfileServerList: readonly ["https://supersim.twilio.com"];
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
