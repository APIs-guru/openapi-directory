import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportsRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetReportsRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportsRouteQueryParams;
}


export class GetReportsRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Position })
  positions?: shared.Position[];

  @Metadata()
  statusCode: number;
}
