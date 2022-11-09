import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1PoolsDefaultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skuName" })
  skuName: string[];
}


export class GetApiV1PoolsDefaultRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1PoolsDefaultQueryParams;
}


export class GetApiV1PoolsDefaultResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PoolStatusResponseBody })
  poolStatusResponseBodies?: shared.PoolStatusResponseBody[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
