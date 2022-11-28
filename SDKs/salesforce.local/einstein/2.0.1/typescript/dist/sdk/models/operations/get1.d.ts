import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Get1PathParams extends SpeakeasyBase {
    id: string;
}
export declare class Get1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class Get1Request extends SpeakeasyBase {
    pathParams: Get1PathParams;
    security: Get1Security;
}
export declare class Get1Response extends SpeakeasyBase {
    contentType: string;
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
}
