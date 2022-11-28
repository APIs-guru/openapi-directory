import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserGroupNoticesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds?: string;
}


export class GetUserGroupNoticesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserGroupNoticesQueryParams;
}


export class GetUserGroupNoticesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupNotice })
  groupNotices?: shared.GroupNotice[];

  @SpeakeasyMetadata()
  statusCode: number;
}
