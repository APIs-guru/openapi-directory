import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPensionIntoEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PensionId" })
  pensionId: string;
}


export class PutPensionIntoEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutPensionIntoEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPensionIntoEmployerPathParams;

  @Metadata()
  headers: PutPensionIntoEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Pension;
}


export class PutPensionIntoEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  pension?: shared.Pension;

  @Metadata()
  statusCode: number;
}
