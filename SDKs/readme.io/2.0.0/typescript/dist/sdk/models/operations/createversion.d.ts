import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVersionSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateVersionRequest extends SpeakeasyBase {
    request: shared.Version;
    security: CreateVersionSecurity;
}
export declare class CreateVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
