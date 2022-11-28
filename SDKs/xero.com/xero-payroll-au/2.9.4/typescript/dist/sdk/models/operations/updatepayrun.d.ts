import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePayRunPathParams extends SpeakeasyBase {
    payRunId: string;
}
export declare class UpdatePayRunHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdatePayRunSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdatePayRunRequest extends SpeakeasyBase {
    pathParams: UpdatePayRunPathParams;
    headers: UpdatePayRunHeaders;
    request?: shared.PayRunInput[];
    security: UpdatePayRunSecurity;
}
export declare class UpdatePayRunResponse extends SpeakeasyBase {
    contentType: string;
    payRuns?: shared.PayRuns;
    statusCode: number;
}
