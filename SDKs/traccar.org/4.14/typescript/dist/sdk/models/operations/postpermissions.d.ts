import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPermissionsRequest extends SpeakeasyBase {
    request: shared.Permission;
}
export declare class PostPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permission?: shared.Permission;
    statusCode: number;
}
