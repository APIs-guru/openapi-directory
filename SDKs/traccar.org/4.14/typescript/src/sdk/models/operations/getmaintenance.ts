import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMaintenanceQueryParams extends SpeakeasyBase {
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


export class GetMaintenanceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMaintenanceQueryParams;
}


export class GetMaintenanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Maintenance })
  maintenances?: shared.Maintenance[];

  @Metadata()
  statusCode: number;
}
