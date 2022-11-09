import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDocHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class CreateDocSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateDocRequest extends SpeakeasyBase {
    headers: CreateDocHeaders;
    request: shared.Doc;
    security: CreateDocSecurity;
}
export declare class CreateDocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
