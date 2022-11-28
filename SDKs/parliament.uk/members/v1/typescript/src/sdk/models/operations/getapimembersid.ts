import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detailsForDate" })
  detailsForDate?: Date;
}


export class GetApiMembersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiMembersIdQueryParams;
}


export class GetApiMembersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberItem?: shared.MemberItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
