import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspaceId" })
  workspaceId: string;
}


export class GetWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWorkspaceQueryParams;
}


export class GetWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: shared.Workspace;
}

export enum GetWorkspace401ApplicationJsonErrorEnum {
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


export class GetWorkspace401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetWorkspace401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetWorkspace403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class GetWorkspace403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetWorkspace403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetWorkspace404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class GetWorkspace404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetWorkspace404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum GetWorkspace422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class GetWorkspace422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetWorkspace422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class GetWorkspace500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class GetWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWorkspace200ApplicationJsonObject?: GetWorkspace200ApplicationJson;

  @Metadata()
  getWorkspace401ApplicationJsonObject?: GetWorkspace401ApplicationJson;

  @Metadata()
  getWorkspace403ApplicationJsonObject?: GetWorkspace403ApplicationJson;

  @Metadata()
  getWorkspace404ApplicationJsonObject?: GetWorkspace404ApplicationJson;

  @Metadata()
  getWorkspace422ApplicationJsonObject?: GetWorkspace422ApplicationJson;

  @Metadata()
  getWorkspace500ApplicationJsonObject?: GetWorkspace500ApplicationJson;
}
