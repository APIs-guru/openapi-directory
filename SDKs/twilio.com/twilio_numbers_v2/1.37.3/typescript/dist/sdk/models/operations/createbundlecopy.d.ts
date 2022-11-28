import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateBundleCopyServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateBundleCopyPathParams extends SpeakeasyBase {
    bundleSid: string;
}
export declare class CreateBundleCopyCreateBundleCopyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class CreateBundleCopySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateBundleCopyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateBundleCopyPathParams;
    request?: CreateBundleCopyCreateBundleCopyRequest;
    security: CreateBundleCopySecurity;
}
export declare class CreateBundleCopyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundleBundleCopy?: shared.NumbersV2RegulatoryComplianceBundleBundleCopy;
}
