import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEmployeeTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    tagId: string;
}
export declare class PutEmployeeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutEmployeeTagRequest extends SpeakeasyBase {
    pathParams: PutEmployeeTagPathParams;
    headers: PutEmployeeTagHeaders;
}
export declare class PutEmployeeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
