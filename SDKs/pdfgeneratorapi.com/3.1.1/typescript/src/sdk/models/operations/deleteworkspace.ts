import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspaceId" })
  workspaceId: string;
}


export class DeleteWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteWorkspaceQueryParams;
}


export class DeleteWorkspace200ApplicationJsonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class DeleteWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: DeleteWorkspace200ApplicationJsonResponse;
}

export enum DeleteWorkspace401ApplicationJsonErrorEnum {
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


export class DeleteWorkspace401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteWorkspace401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteWorkspace403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class DeleteWorkspace403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteWorkspace403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteWorkspace404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class DeleteWorkspace404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteWorkspace404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum DeleteWorkspace422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class DeleteWorkspace422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteWorkspace422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class DeleteWorkspace500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class DeleteWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteWorkspace200ApplicationJsonObject?: DeleteWorkspace200ApplicationJson;

  @Metadata()
  deleteWorkspace401ApplicationJsonObject?: DeleteWorkspace401ApplicationJson;

  @Metadata()
  deleteWorkspace403ApplicationJsonObject?: DeleteWorkspace403ApplicationJson;

  @Metadata()
  deleteWorkspace404ApplicationJsonObject?: DeleteWorkspace404ApplicationJson;

  @Metadata()
  deleteWorkspace422ApplicationJsonObject?: DeleteWorkspace422ApplicationJson;

  @Metadata()
  deleteWorkspace500ApplicationJsonObject?: DeleteWorkspace500ApplicationJson;
}
