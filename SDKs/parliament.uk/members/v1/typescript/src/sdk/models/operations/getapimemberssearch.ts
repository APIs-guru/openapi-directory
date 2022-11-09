import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ConstituencyId" })
  constituencyId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Experience" })
  experience?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Gender" })
  gender?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=House" })
  house?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IsCurrentMember" })
  isCurrentMember?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IsEligible" })
  isEligible?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Location" })
  location?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MembershipEnded.MembershipEndReasonIds" })
  membershipEndedMembershipEndReasonIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=MembershipEnded.MembershipEndedSince" })
  membershipEndedMembershipEndedSince?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOfHouse" })
  membershipInDateRangeWasMemberOfHouse?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOnOrAfter" })
  membershipInDateRangeWasMemberOnOrAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOnOrBefore" })
  membershipInDateRangeWasMemberOnOrBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MembershipStartedSince" })
  membershipStartedSince?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NameStartsWith" })
  nameStartsWith?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PartyId" })
  partyId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyInterestId" })
  policyInterestId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PostTitle" })
  postTitle?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetApiMembersSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiMembersSearchQueryParams;
}


export class GetApiMembersSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  memberMembersServiceSearchResult?: shared.MemberMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
