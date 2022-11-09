import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTemplates200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response", elemType: shared.Template })
  response?: shared.Template[];
}

export enum GetTemplates401ApplicationJsonErrorEnum {
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


export class GetTemplates401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetTemplates401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetTemplates403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class GetTemplates403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetTemplates403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetTemplates404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class GetTemplates404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetTemplates404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetTemplates422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class GetTemplates422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetTemplates422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class GetTemplates500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class GetTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTemplates200ApplicationJsonObject?: GetTemplates200ApplicationJson;

  @Metadata()
  getTemplates401ApplicationJsonObject?: GetTemplates401ApplicationJson;

  @Metadata()
  getTemplates403ApplicationJsonObject?: GetTemplates403ApplicationJson;

  @Metadata()
  getTemplates404ApplicationJsonObject?: GetTemplates404ApplicationJson;

  @Metadata()
  getTemplates422ApplicationJsonObject?: GetTemplates422ApplicationJson;

  @Metadata()
  getTemplates500ApplicationJsonObject?: GetTemplates500ApplicationJson;
}
