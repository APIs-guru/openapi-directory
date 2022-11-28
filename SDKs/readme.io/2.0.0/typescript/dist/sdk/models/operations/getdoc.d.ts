import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetDocHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class GetDocSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDocRequest extends SpeakeasyBase {
    pathParams: GetDocPathParams;
    headers: GetDocHeaders;
    security: GetDocSecurity;
}
export declare class GetDocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
