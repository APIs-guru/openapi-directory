import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetRequest extends SpeakeasyBase {
    pathParams: GetPathParams;
    security: GetSecurity;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
}
