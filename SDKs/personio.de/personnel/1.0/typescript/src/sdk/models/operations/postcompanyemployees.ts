import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostCompanyEmployeesRequestBodyEmployeeGenderEnum {
    Male = "male"
,    Female = "female"
,    Diverse = "diverse"
}


export class PostCompanyEmployeesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=employee[department];" })
  employeeDepartment?: string;

  @Metadata({ data: "form, name=employee[email];" })
  employeeEmail: string;

  @Metadata({ data: "form, name=employee[first_name];" })
  employeeFirstName: string;

  @Metadata({ data: "form, name=employee[gender];" })
  employeeGender?: PostCompanyEmployeesRequestBodyEmployeeGenderEnum;

  @Metadata({ data: "form, name=employee[hire_date];" })
  employeeHireDate?: Date;

  @Metadata({ data: "form, name=employee[last_name];" })
  employeeLastName: string;

  @Metadata({ data: "form, name=employee[position];" })
  employeePosition?: string;

  @Metadata({ data: "form, name=employee[weekly_hours];" })
  employeeWeeklyHours?: number;
}


export class PostCompanyEmployeesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PostCompanyEmployeesRequestBody;
}


export class PostCompanyEmployeesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  statusCode: number;
}
