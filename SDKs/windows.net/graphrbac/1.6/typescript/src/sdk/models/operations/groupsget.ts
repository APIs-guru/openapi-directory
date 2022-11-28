import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsGetQueryParams;
}


export class GroupsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adGroup?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
