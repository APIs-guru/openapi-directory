import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsGetGroupMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsGetGroupMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsGetGroupMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsGetGroupMembersPathParams;

  @Metadata()
  queryParams: GroupsGetGroupMembersQueryParams;
}


export class GroupsGetGroupMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
