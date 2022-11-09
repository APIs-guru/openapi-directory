import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommandsTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=protocol" })
  protocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textChannel" })
  textChannel?: boolean;
}


export class GetCommandsTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommandsTypesQueryParams;
}


export class GetCommandsTypesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.CommandType })
  commandTypes?: shared.CommandType[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
