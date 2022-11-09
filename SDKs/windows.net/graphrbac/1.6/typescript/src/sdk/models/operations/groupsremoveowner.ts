import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsRemoveOwnerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ownerObjectId" })
  ownerObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsRemoveOwnerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsRemoveOwnerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsRemoveOwnerPathParams;

  @Metadata()
  queryParams: GroupsRemoveOwnerQueryParams;
}


export class GroupsRemoveOwnerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
