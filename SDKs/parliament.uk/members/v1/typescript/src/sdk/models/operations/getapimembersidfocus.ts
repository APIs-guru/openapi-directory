import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdFocusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdFocusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdFocusPathParams;
}


export class GetApiMembersIdFocusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberFocusListItem?: shared.MemberFocusListItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
