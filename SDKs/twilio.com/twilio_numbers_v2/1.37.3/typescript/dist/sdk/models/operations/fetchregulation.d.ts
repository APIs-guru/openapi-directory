import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRegulationServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchRegulationPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchRegulationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRegulationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRegulationPathParams;
    security: FetchRegulationSecurity;
}
export declare class FetchRegulationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceRegulation?: shared.NumbersV2RegulatoryComplianceRegulation;
}
