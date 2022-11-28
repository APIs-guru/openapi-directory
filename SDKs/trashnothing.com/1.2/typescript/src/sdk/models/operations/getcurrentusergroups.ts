import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCurrentUserGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=membership" })
  membership?: string;
}


export class GetCurrentUserGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCurrentUserGroupsQueryParams;
}


export class GetCurrentUserGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata()
  statusCode: number;
}
