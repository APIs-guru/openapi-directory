import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCompanyEmployeesEmployeeIdProfilePictureWidthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=width" })
  width: number;
}


export class GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyEmployeesEmployeeIdProfilePictureWidthPathParams;
}


export class GetCompanyEmployeesEmployeeIdProfilePictureWidthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCompanyEmployeesEmployeeIdProfilePictureWidth200ImagePngBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
