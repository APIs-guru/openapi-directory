import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersSearchHistoricalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateToSearchFor" })
  dateToSearchFor?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetApiMembersSearchHistoricalRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiMembersSearchHistoricalQueryParams;
}


export class GetApiMembersSearchHistoricalResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  memberMembersServiceSearchResult?: shared.MemberMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
