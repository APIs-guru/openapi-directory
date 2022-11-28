import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoleUpdatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class RoleUpdateRequest extends SpeakeasyBase {
    pathParams: RoleUpdatePathParams;
    request: shared.RoleUpdateRequest;
}
export declare class RoleUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
