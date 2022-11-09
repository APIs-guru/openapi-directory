import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PutEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmployerPathParams;

  @Metadata()
  headers: PutEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Employer;
}


export class PutEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employer?: shared.Employer;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
