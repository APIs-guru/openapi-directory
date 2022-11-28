import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPositionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class GetPositionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPositionsQueryParams;
}


export class GetPositionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Position })
  positions?: shared.Position[];

  @SpeakeasyMetadata()
  statusCode: number;
}
