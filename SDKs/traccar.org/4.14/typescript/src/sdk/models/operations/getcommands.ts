import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommandsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refresh" })
  refresh?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetCommandsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommandsQueryParams;
}


export class GetCommandsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Command })
  commands?: shared.Command[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
