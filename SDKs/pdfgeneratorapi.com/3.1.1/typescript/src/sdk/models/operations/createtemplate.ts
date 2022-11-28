import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTemplate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: shared.TemplateDefinition;
}

export enum CreateTemplate401ApplicationJsonErrorEnum {
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


export class CreateTemplate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateTemplate401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum CreateTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class CreateTemplate403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateTemplate403ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum CreateTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class CreateTemplate404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateTemplate404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum CreateTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class CreateTemplate422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateTemplate422ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class CreateTemplate500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class CreateTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TemplateDefinitionNew;
}


export class CreateTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createTemplate200ApplicationJsonObject?: CreateTemplate200ApplicationJson;

  @SpeakeasyMetadata()
  createTemplate401ApplicationJsonObject?: CreateTemplate401ApplicationJson;

  @SpeakeasyMetadata()
  createTemplate403ApplicationJsonObject?: CreateTemplate403ApplicationJson;

  @SpeakeasyMetadata()
  createTemplate404ApplicationJsonObject?: CreateTemplate404ApplicationJson;

  @SpeakeasyMetadata()
  createTemplate422ApplicationJsonObject?: CreateTemplate422ApplicationJson;

  @SpeakeasyMetadata()
  createTemplate500ApplicationJsonObject?: CreateTemplate500ApplicationJson;
}
