import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MergeTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.FormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: shared.OutputEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=templateId" })
  templateId: number;
}


export class MergeTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MergeTemplateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Data;
}


export class MergeTemplate200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=content-type" })
  contentType?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class MergeTemplate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: MergeTemplate200ApplicationJsonMeta;

  @Metadata({ data: "json, name=response" })
  response?: string;
}

export enum MergeTemplate401ApplicationJsonErrorEnum {
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


export class MergeTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplate401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum MergeTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}


export class MergeTemplate403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplate403ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum MergeTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found"
,    ResourceNotFound = "Resource not found"
,    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}


export class MergeTemplate404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplate404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

export enum MergeTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting"
,    RequiredParameterMissing = "Required parameter missing"
,    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined"
,    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}


export class MergeTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MergeTemplate422ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class MergeTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}


export class MergeTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mergeTemplate200ApplicationJsonObject?: MergeTemplate200ApplicationJson;

  @Metadata()
  mergeTemplate401ApplicationJsonObject?: MergeTemplate401ApplicationJson;

  @Metadata()
  mergeTemplate403ApplicationJsonObject?: MergeTemplate403ApplicationJson;

  @Metadata()
  mergeTemplate404ApplicationJsonObject?: MergeTemplate404ApplicationJson;

  @Metadata()
  mergeTemplate422ApplicationJsonObject?: MergeTemplate422ApplicationJson;

  @Metadata()
  mergeTemplate500ApplicationJsonObject?: MergeTemplate500ApplicationJson;
}
