import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutNewAeAssessmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AEAssessmentId" })
  aeAssessmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PutNewAeAssessmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutNewAeAssessmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutNewAeAssessmentPathParams;

  @SpeakeasyMetadata()
  headers: PutNewAeAssessmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AeAssessment;
}


export class PutNewAeAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aeAssessment?: shared.AeAssessment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
