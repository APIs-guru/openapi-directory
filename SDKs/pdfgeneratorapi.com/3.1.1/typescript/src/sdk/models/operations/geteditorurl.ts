import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEditorUrlLanguageEnum {
    En = "en",
    Et = "et",
    Cs = "cs",
    Sk = "sk",
    Ru = "ru"
}


export class GetEditorUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: GetEditorUrlLanguageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=templateId" })
  templateId: number;
}


export class GetEditorUrl200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: string;
}

export enum GetEditorUrl401ApplicationJsonErrorEnum {
    AuthenticationFailedRequestExpired = "Authentication failed: request expired",
    AuthenticationFailedSignatureOrSecretMissing = "Authentication failed: signature or secret missing",
    AuthenticationFailedWorkspaceMissing = "Authentication failed: workspace missing",
    AuthenticationFailedKeyMissing = "Authentication failed: key missing",
    AuthenticationFailedPropertyIssIssuerMissingInJwt = "Authentication failed: property 'iss' (issuer) missing in JWT",
    AuthenticationFailedPropertySubSubjectMissingInJwt = "Authentication failed: property 'sub' (subject) missing in JWT",
    AuthenticationFailedPropertyExpExpirationTimeMissingInJwt = "Authentication failed: property 'exp' (expiration time) missing in JWT",
    AuthenticationFailedInvalidIssIssuer = "Authentication failed: invalid 'iss' (issuer)",
    AuthenticationFailedIncorrectSignature = "Authentication failed: incorrect signature",
    AuthenticationFailed = "Authentication failed"
}


export class GetEditorUrl401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetEditorUrl401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum GetEditorUrl403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class GetEditorUrl403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetEditorUrl403ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum GetEditorUrl404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class GetEditorUrl404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetEditorUrl404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum GetEditorUrl422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class GetEditorUrl422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetEditorUrl422ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class GetEditorUrl500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class GetEditorUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEditorUrlQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetEditorUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEditorUrl200ApplicationJsonObject?: GetEditorUrl200ApplicationJson;

  @SpeakeasyMetadata()
  getEditorUrl401ApplicationJsonObject?: GetEditorUrl401ApplicationJson;

  @SpeakeasyMetadata()
  getEditorUrl403ApplicationJsonObject?: GetEditorUrl403ApplicationJson;

  @SpeakeasyMetadata()
  getEditorUrl404ApplicationJsonObject?: GetEditorUrl404ApplicationJson;

  @SpeakeasyMetadata()
  getEditorUrl422ApplicationJsonObject?: GetEditorUrl422ApplicationJson;

  @SpeakeasyMetadata()
  getEditorUrl500ApplicationJsonObject?: GetEditorUrl500ApplicationJson;
}
