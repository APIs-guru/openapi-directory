import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConstituencyId" })
  constituencyId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Experience" })
  experience?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=House" })
  house?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsCurrentMember" })
  isCurrentMember?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsEligible" })
  isEligible?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipEnded.MembershipEndReasonIds" })
  membershipEndedMembershipEndReasonIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipEnded.MembershipEndedSince" })
  membershipEndedMembershipEndedSince?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOfHouse" })
  membershipInDateRangeWasMemberOfHouse?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOnOrAfter" })
  membershipInDateRangeWasMemberOnOrAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipInDateRange.WasMemberOnOrBefore" })
  membershipInDateRangeWasMemberOnOrBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MembershipStartedSince" })
  membershipStartedSince?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NameStartsWith" })
  nameStartsWith?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PartyId" })
  partyId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyInterestId" })
  policyInterestId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PostTitle" })
  postTitle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetApiMembersSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiMembersSearchQueryParams;
}


export class GetApiMembersSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberMembersServiceSearchResult?: shared.MemberMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
