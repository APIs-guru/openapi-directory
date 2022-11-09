import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEditorUrlLanguageEnum {
    En = "en"
,    Et = "et"
,    Cs = "cs"
,    Sk = "sk"
,    Ru = "ru"
}


export class GetEditorUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: GetEditorUrlLanguageEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=templateId" })
  templateId: number;
}


export class GetEditorUrlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEditorUrlQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetEditorUrl200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: string;
}

export enum GetEditorUrl401ApplicationJsonErrorEnum {
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


export class GetEditorUrl401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetEditorUrl401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetEditorUrl403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class GetEditorUrl403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetEditorUrl403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetEditorUrl404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class GetEditorUrl404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetEditorUrl404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetEditorUrl422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class GetEditorUrl422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetEditorUrl422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class GetEditorUrl500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class GetEditorUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEditorUrl200ApplicationJsonObject?: GetEditorUrl200ApplicationJson;

  @Metadata()
  getEditorUrl401ApplicationJsonObject?: GetEditorUrl401ApplicationJson;

  @Metadata()
  getEditorUrl403ApplicationJsonObject?: GetEditorUrl403ApplicationJson;

  @Metadata()
  getEditorUrl404ApplicationJsonObject?: GetEditorUrl404ApplicationJson;

  @Metadata()
  getEditorUrl422ApplicationJsonObject?: GetEditorUrl422ApplicationJson;

  @Metadata()
  getEditorUrl500ApplicationJsonObject?: GetEditorUrl500ApplicationJson;
}
