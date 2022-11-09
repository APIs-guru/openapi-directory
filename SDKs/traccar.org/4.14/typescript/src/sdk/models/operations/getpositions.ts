import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPositionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class GetPositionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPositionsQueryParams;
}


export class GetPositionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Position })
  positions?: shared.Position[];

  @Metadata()
  statusCode: number;
}
