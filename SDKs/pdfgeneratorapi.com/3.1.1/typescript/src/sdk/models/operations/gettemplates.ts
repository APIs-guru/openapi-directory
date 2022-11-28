import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTemplates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response", elemType: shared.Template })
  response?: shared.Template[];
}

export enum GetTemplates401ApplicationJsonErrorEnum {
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


export class GetTemplates401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetTemplates401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum GetTemplates403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class GetTemplates403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetTemplates403ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum GetTemplates404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class GetTemplates404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetTemplates404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum GetTemplates422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class GetTemplates422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetTemplates422ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class GetTemplates500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class GetTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTemplates200ApplicationJsonObject?: GetTemplates200ApplicationJson;

  @SpeakeasyMetadata()
  getTemplates401ApplicationJsonObject?: GetTemplates401ApplicationJson;

  @SpeakeasyMetadata()
  getTemplates403ApplicationJsonObject?: GetTemplates403ApplicationJson;

  @SpeakeasyMetadata()
  getTemplates404ApplicationJsonObject?: GetTemplates404ApplicationJson;

  @SpeakeasyMetadata()
  getTemplates422ApplicationJsonObject?: GetTemplates422ApplicationJson;

  @SpeakeasyMetadata()
  getTemplates500ApplicationJsonObject?: GetTemplates500ApplicationJson;
}
