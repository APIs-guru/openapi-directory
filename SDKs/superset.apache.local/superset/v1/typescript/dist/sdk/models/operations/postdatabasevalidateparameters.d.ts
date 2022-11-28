import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDatabaseValidateParametersSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDatabaseValidateParameters200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseValidateParameters400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseValidateParameters422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseValidateParameters500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseValidateParametersRequest extends SpeakeasyBase {
    request: shared.DatabaseValidateParametersSchema;
    security: PostDatabaseValidateParametersSecurity;
}
export declare class PostDatabaseValidateParametersResponse extends SpeakeasyBase {
    contentType: string;
    postDatabaseValidateParameters200ApplicationJsonObject?: PostDatabaseValidateParameters200ApplicationJson;
    postDatabaseValidateParameters400ApplicationJsonObject?: PostDatabaseValidateParameters400ApplicationJson;
    postDatabaseValidateParameters422ApplicationJsonObject?: PostDatabaseValidateParameters422ApplicationJson;
    postDatabaseValidateParameters500ApplicationJsonObject?: PostDatabaseValidateParameters500ApplicationJson;
    statusCode: number;
}
