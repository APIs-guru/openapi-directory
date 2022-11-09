import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployerRevisionByNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;
}


export class GetEmployerRevisionByNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployerRevisionByNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployerRevisionByNumberPathParams;

  @Metadata()
  headers: GetEmployerRevisionByNumberHeaders;
}


export class GetEmployerRevisionByNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employer?: shared.Employer;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
