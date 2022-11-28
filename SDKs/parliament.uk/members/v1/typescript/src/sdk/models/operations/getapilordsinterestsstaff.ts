import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLordsInterestsStaffQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;
}


export class GetApiLordsInterestsStaffRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiLordsInterestsStaffQueryParams;
}


export class GetApiLordsInterestsStaffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  membersStaffMembersServiceSearchResult?: shared.MembersStaffMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
