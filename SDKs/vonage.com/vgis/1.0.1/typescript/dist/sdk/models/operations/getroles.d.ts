import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRolesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetRolesRequest extends SpeakeasyBase {
    pathParams: GetRolesPathParams;
}
export declare class GetRolesResponse extends SpeakeasyBase {
    calls?: shared.Call[];
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
