import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uniqueId" })
  uniqueId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetDevicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDevicesQueryParams;
}


export class GetDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Device })
  devices?: shared.Device[];

  @Metadata()
  statusCode: number;
}
