import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class GetTasksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTasksQueryParams;

  @Metadata()
  security: GetTasksSecurity;
}


export class GetTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Task })
  tasks?: shared.Task[];
}
