import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCustomTypeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateCustomTypeRequest extends SpeakeasyBase {
    request: shared.CreateConfigInput;
    security: UpdateCustomTypeSecurity;
}
export declare class UpdateCustomTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
