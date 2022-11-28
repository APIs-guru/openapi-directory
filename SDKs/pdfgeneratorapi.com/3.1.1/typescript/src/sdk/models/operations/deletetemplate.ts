import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=templateId" })
  templateId: number;
}


export class DeleteTemplate200ApplicationJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class DeleteTemplate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: DeleteTemplate200ApplicationJsonResponse;
}

export enum DeleteTemplate401ApplicationJsonErrorEnum {
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


export class DeleteTemplate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DeleteTemplate401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class DeleteTemplate403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DeleteTemplate403ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class DeleteTemplate404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DeleteTemplate404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class DeleteTemplate422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DeleteTemplate422ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class DeleteTemplate500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class DeleteTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteTemplateQueryParams;
}


export class DeleteTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteTemplate200ApplicationJsonObject?: DeleteTemplate200ApplicationJson;

  @SpeakeasyMetadata()
  deleteTemplate401ApplicationJsonObject?: DeleteTemplate401ApplicationJson;

  @SpeakeasyMetadata()
  deleteTemplate403ApplicationJsonObject?: DeleteTemplate403ApplicationJson;

  @SpeakeasyMetadata()
  deleteTemplate404ApplicationJsonObject?: DeleteTemplate404ApplicationJson;

  @SpeakeasyMetadata()
  deleteTemplate422ApplicationJsonObject?: DeleteTemplate422ApplicationJson;

  @SpeakeasyMetadata()
  deleteTemplate500ApplicationJsonObject?: DeleteTemplate500ApplicationJson;
}
