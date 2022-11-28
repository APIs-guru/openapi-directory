import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddExamplePathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class AddExampleRequestBody extends SpeakeasyBase {
    data?: string;
    labelId?: number;
    name?: string;
}
export declare class AddExampleSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class AddExampleRequest extends SpeakeasyBase {
    pathParams: AddExamplePathParams;
    request?: AddExampleRequestBody;
    security: AddExampleSecurity;
}
export declare class AddExampleResponse extends SpeakeasyBase {
    contentType: string;
    example?: shared.Example;
    statusCode: number;
}
