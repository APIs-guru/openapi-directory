import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVersionPathParams extends SpeakeasyBase {
    versionId: string;
}
export declare class UpdateVersionSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateVersionRequest extends SpeakeasyBase {
    pathParams: UpdateVersionPathParams;
    request: shared.Version;
    security: UpdateVersionSecurity;
}
export declare class UpdateVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
