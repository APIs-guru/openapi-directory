import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiV1SecretsSecretIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secretId" })
  secretId: string;
}


export class DeleteApiV1SecretsSecretIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: number;
}


export class DeleteApiV1SecretsSecretIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiV1SecretsSecretIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteApiV1SecretsSecretIdQueryParams;
}


export class DeleteApiV1SecretsSecretIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
