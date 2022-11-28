import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SignedInUserGetPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class SignedInUserGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class SignedInUserGetRequest extends SpeakeasyBase {
    pathParams: SignedInUserGetPathParams;
    queryParams: SignedInUserGetQueryParams;
}
export declare class SignedInUserGetResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
    user?: Map<string, Map<string, any>>;
}
