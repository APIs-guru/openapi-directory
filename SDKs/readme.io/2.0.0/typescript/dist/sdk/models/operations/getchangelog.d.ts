import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetChangelogPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetChangelogSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetChangelogRequest extends SpeakeasyBase {
    pathParams: GetChangelogPathParams;
    security: GetChangelogSecurity;
}
export declare class GetChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
