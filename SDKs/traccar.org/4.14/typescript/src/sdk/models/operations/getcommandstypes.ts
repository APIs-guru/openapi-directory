import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommandsTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textChannel" })
  textChannel?: boolean;
}


export class GetCommandsTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommandsTypesQueryParams;
}


export class GetCommandsTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CommandType })
  commandTypes?: shared.CommandType[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
