import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationConstituencySearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetApiLocationConstituencySearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiLocationConstituencySearchQueryParams;
}


export class GetApiLocationConstituencySearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  constituencyMembersServiceSearchResult?: shared.ConstituencyMembersServiceSearchResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
