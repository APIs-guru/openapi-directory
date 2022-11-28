import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectAlt1RequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CreateProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateProjectAlt1Request extends SpeakeasyBase {
    request: CreateProjectAlt1RequestBody;
    security: CreateProjectAlt1Security;
}
export declare class CreateProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    project?: shared.Project;
}
