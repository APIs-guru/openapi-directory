import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPostsDepartmentsTypePathParams extends SpeakeasyBase {
    type: number;
}
export declare class GetApiPostsDepartmentsTypeRequest extends SpeakeasyBase {
    pathParams: GetApiPostsDepartmentsTypePathParams;
}
export declare class GetApiPostsDepartmentsTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    governmentDepartments?: shared.GovernmentDepartment[];
    statusCode: number;
}
