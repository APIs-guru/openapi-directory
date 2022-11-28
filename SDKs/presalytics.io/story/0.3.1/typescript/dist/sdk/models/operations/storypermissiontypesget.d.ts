import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoryPermissionTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    permissionTypes?: shared.PermissionType[];
    problemDetail?: any;
}
