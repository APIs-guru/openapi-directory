import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProvideFeedback1RequestBody extends SpeakeasyBase {
    data?: string;
    expectedLabel?: string;
    modelId?: string;
    name?: string;
}
export declare class ProvideFeedback1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class ProvideFeedback1Request extends SpeakeasyBase {
    request?: ProvideFeedback1RequestBody;
    security: ProvideFeedback1Security;
}
export declare class ProvideFeedback1Response extends SpeakeasyBase {
    contentType: string;
    example?: shared.Example;
    statusCode: number;
}
