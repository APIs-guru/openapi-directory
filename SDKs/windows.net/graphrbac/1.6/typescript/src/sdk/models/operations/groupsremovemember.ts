import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsRemoveMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupObjectId" })
  groupObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberObjectId" })
  memberObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsRemoveMemberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsRemoveMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsRemoveMemberPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsRemoveMemberQueryParams;
}


export class GroupsRemoveMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
