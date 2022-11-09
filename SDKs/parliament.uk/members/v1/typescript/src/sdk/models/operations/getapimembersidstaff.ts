import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdStaffPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdStaffRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdStaffPathParams;
}


export class GetApiMembersIdStaffResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  staffListItem?: shared.StaffListItem;

  @Metadata()
  statusCode: number;
}
