import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCurrentUserGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=membership" })
  membership?: string;
}


export class GetCurrentUserGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCurrentUserGroupsQueryParams;
}


export class GetCurrentUserGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @Metadata()
  statusCode: number;
}
