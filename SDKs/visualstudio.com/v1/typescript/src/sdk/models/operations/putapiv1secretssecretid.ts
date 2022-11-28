import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1SecretsSecretIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secretId" })
  secretId: string;
}


export class PutApiV1SecretsSecretIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class PutApiV1SecretsSecretIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scopedUpdateSecretBody?: shared.ScopedUpdateSecretBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scopedUpdateSecretBody1?: shared.ScopedUpdateSecretBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scopedUpdateSecretBody2?: shared.ScopedUpdateSecretBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scopedUpdateSecretBody3?: shared.ScopedUpdateSecretBody;
}


export class PutApiV1SecretsSecretIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1SecretsSecretIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutApiV1SecretsSecretIdQueryParams;

  @SpeakeasyMetadata()
  request?: PutApiV1SecretsSecretIdRequests;
}


export class PutApiV1SecretsSecretIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  scopedSecretResultBody?: shared.ScopedSecretResultBody;

  @SpeakeasyMetadata()
  statusCode: number;
}
