import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsListOwnersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsListOwnersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsListOwnersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsListOwnersPathParams;

  @Metadata()
  queryParams: GroupsListOwnersQueryParams;
}


export class GroupsListOwnersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryObjectListResult?: shared.DirectoryObjectListResult;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
