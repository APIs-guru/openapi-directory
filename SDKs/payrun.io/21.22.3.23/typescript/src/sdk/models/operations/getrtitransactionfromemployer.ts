import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRtiTransactionFromEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RtiTransactionId" })
  rtiTransactionId: string;
}


export class GetRtiTransactionFromEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetRtiTransactionFromEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRtiTransactionFromEmployerPathParams;

  @Metadata()
  headers: GetRtiTransactionFromEmployerHeaders;
}


export class GetRtiTransactionFromEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  rtiTransactionBase?: shared.RtiTransactionBase;

  @Metadata()
  statusCode: number;
}
