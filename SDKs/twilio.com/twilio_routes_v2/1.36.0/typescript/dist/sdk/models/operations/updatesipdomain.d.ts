import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESIPDOMAIN_SERVERS: string[];
export declare class UpdateSipDomainPathParams extends SpeakeasyBase {
    sipDomain: string;
}
export declare class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
    friendlyName?: string;
    voiceRegion?: string;
}
export declare class UpdateSipDomainSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSipDomainRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSipDomainPathParams;
    request?: UpdateSipDomainUpdateSipDomainRequest;
    security: UpdateSipDomainSecurity;
}
export declare class UpdateSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    routesV2SipDomain?: shared.RoutesV2SipDomain;
}
