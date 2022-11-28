import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1SecretsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class GetApiV1SecretsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1SecretsQueryParams;
}


export class GetApiV1SecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata({ elemType: shared.ScopedSecretResultBody })
  scopedSecretResultBodies?: shared.ScopedSecretResultBody[];

  @SpeakeasyMetadata()
  statusCode: number;
}
