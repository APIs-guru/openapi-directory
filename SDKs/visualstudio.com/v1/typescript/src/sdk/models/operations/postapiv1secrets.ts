import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1SecretsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class PostApiV1SecretsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scopedCreateSecretBody?: shared.ScopedCreateSecretBody;

  @Metadata({ data: "request, media_type=application/json" })
  scopedCreateSecretBody1?: shared.ScopedCreateSecretBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scopedCreateSecretBody2?: shared.ScopedCreateSecretBody;

  @Metadata({ data: "request, media_type=text/json" })
  scopedCreateSecretBody3?: shared.ScopedCreateSecretBody;
}


export class PostApiV1SecretsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApiV1SecretsQueryParams;

  @Metadata()
  request?: PostApiV1SecretsRequests;
}


export class PostApiV1SecretsResponse extends SpeakeasyBase {
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
