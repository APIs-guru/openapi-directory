import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAeAssessmentFromEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AEAssessmentId" })
  aeAssessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetAeAssessmentFromEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetAeAssessmentFromEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAeAssessmentFromEmployeePathParams;

  @Metadata()
  headers: GetAeAssessmentFromEmployeeHeaders;
}


export class GetAeAssessmentFromEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  aeAssessment?: shared.AeAssessment;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
