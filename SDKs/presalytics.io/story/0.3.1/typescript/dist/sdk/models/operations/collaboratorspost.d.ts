import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CollaboratorsPostRequest extends SpeakeasyBase {
    request: any;
}
export declare class CollaboratorsPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    permissionTypes?: shared.PermissionType[];
    problemDetail?: any;
}
