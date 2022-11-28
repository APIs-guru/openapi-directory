import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersSearchHistoricalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateToSearchFor" })
  dateToSearchFor?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetApiMembersSearchHistoricalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiMembersSearchHistoricalQueryParams;
}


export class GetApiMembersSearchHistoricalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberMembersServiceSearchResult?: shared.MemberMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
