import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmployerRevisionByNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;
}


export class GetEmployerRevisionByNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployerRevisionByNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmployerRevisionByNumberPathParams;

  @SpeakeasyMetadata()
  headers: GetEmployerRevisionByNumberHeaders;
}


export class GetEmployerRevisionByNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employer?: shared.Employer;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
