import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployeeSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SecretId" })
  secretId: string;
}


export class GetEmployeeSecretHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployeeSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployeeSecretPathParams;

  @Metadata()
  headers: GetEmployeeSecretHeaders;
}


export class GetEmployeeSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employeeSecret?: shared.EmployeeSecret;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
