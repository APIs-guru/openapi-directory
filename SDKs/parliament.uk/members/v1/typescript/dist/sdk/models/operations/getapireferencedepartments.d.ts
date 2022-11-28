import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiReferenceDepartmentsQueryParams extends SpeakeasyBase {
    id?: number;
    nameContains?: string;
}
export declare class GetApiReferenceDepartmentsRequest extends SpeakeasyBase {
    queryParams: GetApiReferenceDepartmentsQueryParams;
}
export declare class GetApiReferenceDepartmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    governmentDepartments?: shared.GovernmentDepartment[];
    statusCode: number;
}
