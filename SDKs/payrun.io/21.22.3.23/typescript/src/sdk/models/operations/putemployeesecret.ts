import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEmployeeSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SecretId" })
  secretId: string;
}


export class PutEmployeeSecretHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutEmployeeSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmployeeSecretPathParams;

  @Metadata()
  headers: PutEmployeeSecretHeaders;
}


export class PutEmployeeSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employeeSecret?: shared.EmployeeSecret;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
