import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLordsInterestsRegisterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;
}


export class GetApiLordsInterestsRegisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiLordsInterestsRegisterQueryParams;
}


export class GetApiLordsInterestsRegisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  membersInterestsMembersServiceSearchResult?: shared.MembersInterestsMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
