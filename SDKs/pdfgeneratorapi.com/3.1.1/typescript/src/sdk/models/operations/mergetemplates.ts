import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MergeTemplatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.FormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: shared.OutputEnum;
}


export class MergeTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MergeTemplatesQueryParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchData })
  request: shared.BatchData[];
}


export class MergeTemplates200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=content-type" })
  contentType?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class MergeTemplates200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: MergeTemplates200ApplicationJsonMeta;

  @Metadata({ data: "json, name=response" })
  response?: string;
}

export enum MergeTemplates401ApplicationJsonErrorEnum {
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


export class MergeTemplates401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplates401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum MergeTemplates403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class MergeTemplates403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplates403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum MergeTemplates404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class MergeTemplates404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplates404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum MergeTemplates422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class MergeTemplates422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplates422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class MergeTemplates500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class MergeTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mergeTemplates200ApplicationJsonObject?: MergeTemplates200ApplicationJson;

  @Metadata()
  mergeTemplates401ApplicationJsonObject?: MergeTemplates401ApplicationJson;

  @Metadata()
  mergeTemplates403ApplicationJsonObject?: MergeTemplates403ApplicationJson;

  @Metadata()
  mergeTemplates404ApplicationJsonObject?: MergeTemplates404ApplicationJson;

  @Metadata()
  mergeTemplates422ApplicationJsonObject?: MergeTemplates422ApplicationJson;

  @Metadata()
  mergeTemplates500ApplicationJsonObject?: MergeTemplates500ApplicationJson;
}
