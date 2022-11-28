import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostCompanyEmployeesRequestBodyEmployeeGenderEnum {
    Male = "male",
    Female = "female",
    Diverse = "diverse"
}


export class PostCompanyEmployeesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=employee[department];" })
  employeeDepartment?: string;

  @SpeakeasyMetadata({ data: "form, name=employee[email];" })
  employeeEmail: string;

  @SpeakeasyMetadata({ data: "form, name=employee[first_name];" })
  employeeFirstName: string;

  @SpeakeasyMetadata({ data: "form, name=employee[gender];" })
  employeeGender?: PostCompanyEmployeesRequestBodyEmployeeGenderEnum;

  @SpeakeasyMetadata({ data: "form, name=employee[hire_date];" })
  employeeHireDate?: Date;

  @SpeakeasyMetadata({ data: "form, name=employee[last_name];" })
  employeeLastName: string;

  @SpeakeasyMetadata({ data: "form, name=employee[position];" })
  employeePosition?: string;

  @SpeakeasyMetadata({ data: "form, name=employee[weekly_hours];" })
  employeeWeeklyHours?: number;
}


export class PostCompanyEmployeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PostCompanyEmployeesRequestBody;
}


export class PostCompanyEmployeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  response?: shared.Response;

  @SpeakeasyMetadata()
  statusCode: number;
}
