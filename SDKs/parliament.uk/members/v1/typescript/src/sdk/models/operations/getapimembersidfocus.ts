import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdFocusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdFocusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdFocusPathParams;
}


export class GetApiMembersIdFocusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  memberFocusListItem?: shared.MemberFocusListItem;

  @Metadata()
  statusCode: number;
}
