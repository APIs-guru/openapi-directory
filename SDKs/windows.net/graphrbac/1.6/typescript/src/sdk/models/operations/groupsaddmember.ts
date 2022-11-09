import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsAddMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupObjectId" })
  groupObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsAddMemberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsAddMemberRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  groupAddMemberParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  groupAddMemberParameters1?: Map<string, Map<string, any>>;
}


export class GroupsAddMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsAddMemberPathParams;

  @Metadata()
  queryParams: GroupsAddMemberQueryParams;

  @Metadata()
  request: GroupsAddMemberRequests;
}


export class GroupsAddMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
