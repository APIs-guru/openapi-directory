import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserGroupNoticesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds?: string;
}


export class GetUserGroupNoticesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserGroupNoticesQueryParams;
}


export class GetUserGroupNoticesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GroupNotice })
  groupNotices?: shared.GroupNotice[];

  @Metadata()
  statusCode: number;
}
