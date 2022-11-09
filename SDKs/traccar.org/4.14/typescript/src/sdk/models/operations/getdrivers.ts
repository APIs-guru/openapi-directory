import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDriversQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=refresh" })
  refresh?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetDriversRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDriversQueryParams;
}


export class GetDriversResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Driver })
  drivers?: shared.Driver[];

  @Metadata()
  statusCode: number;
}
