import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1SecretsSecretIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=secretId" })
  secretId: string;
}


export class PutApiV1SecretsSecretIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class PutApiV1SecretsSecretIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scopedUpdateSecretBody?: shared.ScopedUpdateSecretBody;

  @Metadata({ data: "request, media_type=application/json" })
  scopedUpdateSecretBody1?: shared.ScopedUpdateSecretBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scopedUpdateSecretBody2?: shared.ScopedUpdateSecretBody;

  @Metadata({ data: "request, media_type=text/json" })
  scopedUpdateSecretBody3?: shared.ScopedUpdateSecretBody;
}


export class PutApiV1SecretsSecretIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1SecretsSecretIdPathParams;

  @Metadata()
  queryParams: PutApiV1SecretsSecretIdQueryParams;

  @Metadata()
  request?: PutApiV1SecretsSecretIdRequests;
}


export class PutApiV1SecretsSecretIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  scopedSecretResultBody?: shared.ScopedSecretResultBody;

  @Metadata()
  statusCode: number;
}
