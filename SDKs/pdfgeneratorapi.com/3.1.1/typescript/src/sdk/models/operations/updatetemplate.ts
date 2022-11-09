import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=templateId" })
  templateId: number;
}


export class UpdateTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateTemplateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TemplateDefinitionNew;
}


export class UpdateTemplate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: shared.TemplateDefinition;
}

export enum UpdateTemplate401ApplicationJsonErrorEnum {
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


export class UpdateTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateTemplate401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum UpdateTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class UpdateTemplate403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateTemplate403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum UpdateTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class UpdateTemplate404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateTemplate404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum UpdateTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class UpdateTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateTemplate422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class UpdateTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class UpdateTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateTemplate200ApplicationJsonObject?: UpdateTemplate200ApplicationJson;

  @Metadata()
  updateTemplate401ApplicationJsonObject?: UpdateTemplate401ApplicationJson;

  @Metadata()
  updateTemplate403ApplicationJsonObject?: UpdateTemplate403ApplicationJson;

  @Metadata()
  updateTemplate404ApplicationJsonObject?: UpdateTemplate404ApplicationJson;

  @Metadata()
  updateTemplate422ApplicationJsonObject?: UpdateTemplate422ApplicationJson;

  @Metadata()
  updateTemplate500ApplicationJsonObject?: UpdateTemplate500ApplicationJson;
}
