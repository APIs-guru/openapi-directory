import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePayRunHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreatePayRunSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreatePayRunRequest extends SpeakeasyBase {
    headers: CreatePayRunHeaders;
    request: shared.PayRunInput[];
    security: CreatePayRunSecurity;
}
export declare class CreatePayRunResponse extends SpeakeasyBase {
    contentType: string;
    payRuns?: shared.PayRuns;
    statusCode: number;
}
