import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSwaggerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSwaggerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteSwaggerRequest extends SpeakeasyBase {
    pathParams: DeleteSwaggerPathParams;
    security: DeleteSwaggerSecurity;
}
export declare class DeleteSwaggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
