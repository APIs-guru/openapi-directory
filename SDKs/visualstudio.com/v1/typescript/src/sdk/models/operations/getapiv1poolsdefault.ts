import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1PoolsDefaultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skuName" })
  skuName: string[];
}


export class GetApiV1PoolsDefaultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1PoolsDefaultQueryParams;
}


export class GetApiV1PoolsDefaultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PoolStatusResponseBody })
  poolStatusResponseBodies?: shared.PoolStatusResponseBody[];

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
