import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAeAssessmentFromEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AEAssessmentId" })
  aeAssessmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetAeAssessmentFromEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetAeAssessmentFromEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAeAssessmentFromEmployeePathParams;

  @SpeakeasyMetadata()
  headers: GetAeAssessmentFromEmployeeHeaders;
}


export class GetAeAssessmentFromEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aeAssessment?: shared.AeAssessment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
