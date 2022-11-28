import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdEdmsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdEdmsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdEdmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdEdmsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiMembersIdEdmsQueryParams;
}


export class GetApiMembersIdEdmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  earlyDayMotionMembersServiceSearchResult?: shared.EarlyDayMotionMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
