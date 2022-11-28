import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectsGetObjectsByObjectIdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ObjectsGetObjectsByObjectIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ObjectsGetObjectsByObjectIdsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  getObjectsParameters?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  getObjectsParameters1?: Map<string, Map<string, any>>;
}


export class ObjectsGetObjectsByObjectIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectsGetObjectsByObjectIdsPathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectsGetObjectsByObjectIdsQueryParams;

  @SpeakeasyMetadata()
  request: ObjectsGetObjectsByObjectIdsRequests;
}


export class ObjectsGetObjectsByObjectIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
