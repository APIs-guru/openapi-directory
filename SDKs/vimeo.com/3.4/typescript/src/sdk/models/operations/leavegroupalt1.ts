import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LeaveGroupAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class LeaveGroupAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class LeaveGroupAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: LeaveGroupAlt1PathParams;

  @Metadata()
  security: LeaveGroupAlt1Security;
}


export class LeaveGroupAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
