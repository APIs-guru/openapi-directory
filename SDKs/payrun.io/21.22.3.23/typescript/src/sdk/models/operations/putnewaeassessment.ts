import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutNewAeAssessmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AEAssessmentId" })
  aeAssessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PutNewAeAssessmentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutNewAeAssessmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutNewAeAssessmentPathParams;

  @Metadata()
  headers: PutNewAeAssessmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AeAssessment;
}


export class PutNewAeAssessmentResponse extends SpeakeasyBase {
  @Metadata()
  aeAssessment?: shared.AeAssessment;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
