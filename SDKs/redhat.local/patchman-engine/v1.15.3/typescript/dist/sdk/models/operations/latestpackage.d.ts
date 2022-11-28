import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LatestPackagePathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class LatestPackageSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class LatestPackageRequest extends SpeakeasyBase {
    pathParams: LatestPackagePathParams;
    security: LatestPackageSecurity;
}
export declare class LatestPackageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersPackageDetailResponse?: shared.ControllersPackageDetailResponse;
}
