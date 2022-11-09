import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCompanyEmployeesEmployeeIdProfilePictureWidthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=width" })
  width: number;
}


export class GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCompanyEmployeesEmployeeIdProfilePictureWidthPathParams;
}


export class GetCompanyEmployeesEmployeeIdProfilePictureWidthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCompanyEmployeesEmployeeIdProfilePictureWidth200ImagePngBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
