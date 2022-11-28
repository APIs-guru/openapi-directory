import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayRunPathParams extends SpeakeasyBase {
    payRunId: string;
}
export declare class GetPayRunHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetPayRunSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPayRunRequest extends SpeakeasyBase {
    pathParams: GetPayRunPathParams;
    headers: GetPayRunHeaders;
    security: GetPayRunSecurity;
}
export declare class GetPayRunResponse extends SpeakeasyBase {
    contentType: string;
    payRuns?: shared.PayRuns;
    statusCode: number;
}
