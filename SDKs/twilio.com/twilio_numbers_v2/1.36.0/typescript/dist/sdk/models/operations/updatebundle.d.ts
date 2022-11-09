import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEBUNDLE_SERVERS: string[];
export declare class UpdateBundlePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateBundleUpdateBundleRequest extends SpeakeasyBase {
    email?: string;
    friendlyName?: string;
    status?: shared.BundleEnumStatusEnum;
    statusCallback?: string;
}
export declare class UpdateBundleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateBundleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateBundlePathParams;
    request?: UpdateBundleUpdateBundleRequest;
    security: UpdateBundleSecurity;
}
export declare class UpdateBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
