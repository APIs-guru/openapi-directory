import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsGetGroupMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsGetGroupMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsGetGroupMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsGetGroupMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsGetGroupMembersQueryParams;
}


export class GroupsGetGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
