import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostCompanyEmployeesRequestBodyEmployeeGenderEnum {
    Male = "male",
    Female = "female",
    Diverse = "diverse"
}
export declare class PostCompanyEmployeesRequestBody extends SpeakeasyBase {
    employeeDepartment?: string;
    employeeEmail: string;
    employeeFirstName: string;
    employeeGender?: PostCompanyEmployeesRequestBodyEmployeeGenderEnum;
    employeeHireDate?: Date;
    employeeLastName: string;
    employeePosition?: string;
    employeeWeeklyHours?: number;
}
export declare class PostCompanyEmployeesRequest extends SpeakeasyBase {
    request: PostCompanyEmployeesRequestBody;
}
export declare class PostCompanyEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    response?: shared.Response;
    statusCode: number;
}
