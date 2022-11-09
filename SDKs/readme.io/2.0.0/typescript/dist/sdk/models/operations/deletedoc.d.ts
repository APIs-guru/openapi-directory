import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteDocPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteDocHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class DeleteDocSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteDocRequest extends SpeakeasyBase {
    pathParams: DeleteDocPathParams;
    headers: DeleteDocHeaders;
    security: DeleteDocSecurity;
}
export declare class DeleteDocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
