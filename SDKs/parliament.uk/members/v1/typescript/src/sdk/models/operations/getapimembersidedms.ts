import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdEdmsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdEdmsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdEdmsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdEdmsPathParams;

  @Metadata()
  queryParams: GetApiMembersIdEdmsQueryParams;
}


export class GetApiMembersIdEdmsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  earlyDayMotionMembersServiceSearchResult?: shared.EarlyDayMotionMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
