import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TemplateDefinitionNew;
}


export class CreateTemplate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: shared.TemplateDefinition;
}

export enum CreateTemplate401ApplicationJsonErrorEnum {
    AuthenticationFailedRequestExpired = "Authentication failed: request expired"
,    AuthenticationFailedSignatureOrSecretMissing = "Authentication failed: signature or secret missing"
,    AuthenticationFailedWorkspaceMissing = "Authentication failed: workspace missing"
,    AuthenticationFailedKeyMissing = "Authentication failed: key missing"
,    AuthenticationFailedPropertyIssIssuerMissingInJwt = "Authentication failed: property 'iss' (issuer) missing in JWT"
,    AuthenticationFailedPropertySubSubjectMissingInJwt = "Authentication failed: property 'sub' (subject) missing in JWT"
,    AuthenticationFailedPropertyExpExpirationTimeMissingInJwt = "Authentication failed: property 'exp' (expiration time) missing in JWT"
,    AuthenticationFailedInvalidIssIssuer = "Authentication failed: invalid 'iss' (issuer)"
,    AuthenticationFailedIncorrectSignature = "Authentication failed: incorrect signature"
,    AuthenticationFailed = "Authentication failed"
}


export class CreateTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateTemplate401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum CreateTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class CreateTemplate403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateTemplate403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum CreateTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class CreateTemplate404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateTemplate404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum CreateTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class CreateTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateTemplate422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class CreateTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class CreateTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createTemplate200ApplicationJsonObject?: CreateTemplate200ApplicationJson;

  @Metadata()
  createTemplate401ApplicationJsonObject?: CreateTemplate401ApplicationJson;

  @Metadata()
  createTemplate403ApplicationJsonObject?: CreateTemplate403ApplicationJson;

  @Metadata()
  createTemplate404ApplicationJsonObject?: CreateTemplate404ApplicationJson;

  @Metadata()
  createTemplate422ApplicationJsonObject?: CreateTemplate422ApplicationJson;

  @Metadata()
  createTemplate500ApplicationJsonObject?: CreateTemplate500ApplicationJson;
}
