import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditProjectAlt1PathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class EditProjectAlt1RequestBody extends SpeakeasyBase {
    name: string;
}
export declare class EditProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditProjectAlt1Request extends SpeakeasyBase {
    pathParams: EditProjectAlt1PathParams;
    request: EditProjectAlt1RequestBody;
    security: EditProjectAlt1Security;
}
export declare class EditProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    project?: shared.Project;
}
