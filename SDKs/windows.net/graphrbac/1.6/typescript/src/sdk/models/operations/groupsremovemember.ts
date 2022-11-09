import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsRemoveMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupObjectId" })
  groupObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=memberObjectId" })
  memberObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsRemoveMemberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsRemoveMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsRemoveMemberPathParams;

  @Metadata()
  queryParams: GroupsRemoveMemberQueryParams;
}


export class GroupsRemoveMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
