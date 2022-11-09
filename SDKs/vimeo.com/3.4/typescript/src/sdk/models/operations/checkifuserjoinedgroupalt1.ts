import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfUserJoinedGroupAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class CheckIfUserJoinedGroupAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfUserJoinedGroupAlt1PathParams;
}


export class CheckIfUserJoinedGroupAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
