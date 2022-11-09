import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLordsInterestsRegisterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;
}


export class GetApiLordsInterestsRegisterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiLordsInterestsRegisterQueryParams;
}


export class GetApiLordsInterestsRegisterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  membersInterestsMembersServiceSearchResult?: shared.MembersInterestsMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
