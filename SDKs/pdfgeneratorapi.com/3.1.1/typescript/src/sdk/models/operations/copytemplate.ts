import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CopyTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=templateId" })
  templateId: number;
}


export class CopyTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CopyTemplateQueryParams;
}


export class CopyTemplate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: shared.TemplateDefinition;
}

export enum CopyTemplate401ApplicationJsonErrorEnum {
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


export class CopyTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CopyTemplate401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum CopyTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class CopyTemplate403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CopyTemplate403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum CopyTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class CopyTemplate404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CopyTemplate404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum CopyTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class CopyTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CopyTemplate422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class CopyTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class CopyTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  copyTemplate200ApplicationJsonObject?: CopyTemplate200ApplicationJson;

  @Metadata()
  copyTemplate401ApplicationJsonObject?: CopyTemplate401ApplicationJson;

  @Metadata()
  copyTemplate403ApplicationJsonObject?: CopyTemplate403ApplicationJson;

  @Metadata()
  copyTemplate404ApplicationJsonObject?: CopyTemplate404ApplicationJson;

  @Metadata()
  copyTemplate422ApplicationJsonObject?: CopyTemplate422ApplicationJson;

  @Metadata()
  copyTemplate500ApplicationJsonObject?: CopyTemplate500ApplicationJson;
}
