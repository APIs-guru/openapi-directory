import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCisTransactionFromEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CisTransactionId" })
  cisTransactionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetCisTransactionFromEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCisTransactionFromEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCisTransactionFromEmployerPathParams;

  @Metadata()
  headers: GetCisTransactionFromEmployerHeaders;
}


export class GetCisTransactionFromEmployerResponse extends SpeakeasyBase {
  @Metadata()
  cisTransaction?: shared.CisTransaction;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
