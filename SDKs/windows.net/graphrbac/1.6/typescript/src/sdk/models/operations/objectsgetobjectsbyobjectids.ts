import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ObjectsGetObjectsByObjectIdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ObjectsGetObjectsByObjectIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ObjectsGetObjectsByObjectIdsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  getObjectsParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  getObjectsParameters1?: Map<string, Map<string, any>>;
}


export class ObjectsGetObjectsByObjectIdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ObjectsGetObjectsByObjectIdsPathParams;

  @Metadata()
  queryParams: ObjectsGetObjectsByObjectIdsQueryParams;

  @Metadata()
  request: ObjectsGetObjectsByObjectIdsRequests;
}


export class ObjectsGetObjectsByObjectIdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @Metadata()
  statusCode: number;
}
