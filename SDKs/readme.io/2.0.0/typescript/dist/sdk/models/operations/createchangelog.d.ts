import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateChangelogSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateChangelogRequest extends SpeakeasyBase {
    request: shared.Changelog;
    security: CreateChangelogSecurity;
}
export declare class CreateChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
