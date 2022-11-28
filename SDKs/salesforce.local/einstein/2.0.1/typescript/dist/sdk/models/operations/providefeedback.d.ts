import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProvideFeedbackRequestBody extends SpeakeasyBase {
    document?: string;
    expectedLabel?: string;
    modelId?: string;
    name?: string;
}
export declare class ProvideFeedbackSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class ProvideFeedbackRequest extends SpeakeasyBase {
    request?: ProvideFeedbackRequestBody;
    security: ProvideFeedbackSecurity;
}
export declare class ProvideFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    example?: shared.Example;
    statusCode: number;
}
