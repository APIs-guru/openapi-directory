import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateDocPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class UpdateDocHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class UpdateDocSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateDocRequest extends SpeakeasyBase {
    pathParams: UpdateDocPathParams;
    headers: UpdateDocHeaders;
    request: shared.Doc;
    security: UpdateDocSecurity;
}
export declare class UpdateDocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
