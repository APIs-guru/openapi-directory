import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAeAssessmentsFromPayRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayRunId" })
  payRunId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;
}


export class GetAeAssessmentsFromPayRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetAeAssessmentsFromPayRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAeAssessmentsFromPayRunPathParams;

  @SpeakeasyMetadata()
  headers: GetAeAssessmentsFromPayRunHeaders;
}


export class GetAeAssessmentsFromPayRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
