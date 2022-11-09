import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=templateId" })
  templateId: number;
}


export class DeleteTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteTemplateQueryParams;
}


export class DeleteTemplate200ApplicationJsonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class DeleteTemplate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: DeleteTemplate200ApplicationJsonResponse;
}

export enum DeleteTemplate401ApplicationJsonErrorEnum {
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


export class DeleteTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteTemplate401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class DeleteTemplate403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteTemplate403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class DeleteTemplate404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteTemplate404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class DeleteTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteTemplate422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class DeleteTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class DeleteTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteTemplate200ApplicationJsonObject?: DeleteTemplate200ApplicationJson;

  @Metadata()
  deleteTemplate401ApplicationJsonObject?: DeleteTemplate401ApplicationJson;

  @Metadata()
  deleteTemplate403ApplicationJsonObject?: DeleteTemplate403ApplicationJson;

  @Metadata()
  deleteTemplate404ApplicationJsonObject?: DeleteTemplate404ApplicationJson;

  @Metadata()
  deleteTemplate422ApplicationJsonObject?: DeleteTemplate422ApplicationJson;

  @Metadata()
  deleteTemplate500ApplicationJsonObject?: DeleteTemplate500ApplicationJson;
}
