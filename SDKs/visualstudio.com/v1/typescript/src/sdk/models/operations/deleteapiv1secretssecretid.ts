import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1SecretsSecretIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=secretId" })
  secretId: string;
}


export class DeleteApiV1SecretsSecretIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: number;
}


export class DeleteApiV1SecretsSecretIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1SecretsSecretIdPathParams;

  @Metadata()
  queryParams: DeleteApiV1SecretsSecretIdQueryParams;
}


export class DeleteApiV1SecretsSecretIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
