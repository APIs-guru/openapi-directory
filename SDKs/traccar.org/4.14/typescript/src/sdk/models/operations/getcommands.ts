import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommandsQueryParams extends SpeakeasyBase {
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


export class GetCommandsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommandsQueryParams;
}


export class GetCommandsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Command })
  commands?: shared.Command[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
