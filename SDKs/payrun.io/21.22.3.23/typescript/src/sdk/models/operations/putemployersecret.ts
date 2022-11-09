import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEmployerSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SecretId" })
  secretId: string;
}


export class PutEmployerSecretHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutEmployerSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmployerSecretPathParams;

  @Metadata()
  headers: PutEmployerSecretHeaders;
}


export class PutEmployerSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employerSecret?: shared.EmployerSecret;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
