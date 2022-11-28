import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayLineFromEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayLineId" })
  payLineId: string;
}


export class GetPayLineFromEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayLineFromEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayLineFromEmployeePathParams;

  @SpeakeasyMetadata()
  headers: GetPayLineFromEmployeeHeaders;
}


export class GetPayLineFromEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  payLine?: shared.PayLine;

  @SpeakeasyMetadata()
  statusCode: number;
}
