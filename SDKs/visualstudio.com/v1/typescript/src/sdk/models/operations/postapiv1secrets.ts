import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1SecretsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class PostApiV1SecretsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scopedCreateSecretBody?: shared.ScopedCreateSecretBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scopedCreateSecretBody1?: shared.ScopedCreateSecretBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scopedCreateSecretBody2?: shared.ScopedCreateSecretBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scopedCreateSecretBody3?: shared.ScopedCreateSecretBody;
}


export class PostApiV1SecretsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostApiV1SecretsQueryParams;

  @SpeakeasyMetadata()
  request?: PostApiV1SecretsRequests;
}


export class PostApiV1SecretsResponse extends SpeakeasyBase {
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
