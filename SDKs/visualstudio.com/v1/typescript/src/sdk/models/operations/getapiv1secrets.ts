import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1SecretsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId?: string;
}


export class GetApiV1SecretsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1SecretsQueryParams;
}


export class GetApiV1SecretsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata({ elemType: shared.ScopedSecretResultBody })
  scopedSecretResultBodies?: shared.ScopedSecretResultBody[];

  @Metadata()
  statusCode: number;
}
