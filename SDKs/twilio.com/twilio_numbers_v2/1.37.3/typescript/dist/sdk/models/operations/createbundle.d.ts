import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateBundleCreateBundleRequest extends SpeakeasyBase {
    email: string;
    endUserType?: shared.BundleEnumEndUserTypeEnum;
    friendlyName: string;
    isoCountry?: string;
    numberType?: string;
    regulationSid?: string;
    statusCallback?: string;
}
export declare class CreateBundleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateBundleRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateBundleCreateBundleRequest;
    security: CreateBundleSecurity;
}
export declare class CreateBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
