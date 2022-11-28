import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVersionPathParams extends SpeakeasyBase {
    versionId: string;
}
export declare class DeleteVersionSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteVersionRequest extends SpeakeasyBase {
    pathParams: DeleteVersionPathParams;
    security: DeleteVersionSecurity;
}
export declare class DeleteVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
