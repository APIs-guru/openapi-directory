import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=detailsForDate" })
  detailsForDate?: Date;
}


export class GetApiMembersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdPathParams;

  @Metadata()
  queryParams: GetApiMembersIdQueryParams;
}


export class GetApiMembersIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  memberItem?: shared.MemberItem;

  @Metadata()
  statusCode: number;
}
