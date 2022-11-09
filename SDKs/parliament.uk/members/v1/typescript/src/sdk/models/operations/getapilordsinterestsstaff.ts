import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLordsInterestsStaffQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;
}


export class GetApiLordsInterestsStaffRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiLordsInterestsStaffQueryParams;
}


export class GetApiLordsInterestsStaffResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  membersStaffMembersServiceSearchResult?: shared.MembersStaffMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
