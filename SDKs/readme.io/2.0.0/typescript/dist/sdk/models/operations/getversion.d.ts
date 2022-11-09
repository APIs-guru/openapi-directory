import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVersionPathParams extends SpeakeasyBase {
    versionId: string;
}
export declare class GetVersionSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetVersionRequest extends SpeakeasyBase {
    pathParams: GetVersionPathParams;
    security: GetVersionSecurity;
}
export declare class GetVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
