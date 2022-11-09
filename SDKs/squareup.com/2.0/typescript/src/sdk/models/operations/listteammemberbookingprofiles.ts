import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTeamMemberBookingProfilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bookable_only" })
  bookableOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;
}


export class ListTeamMemberBookingProfilesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListTeamMemberBookingProfilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTeamMemberBookingProfilesQueryParams;

  @Metadata()
  security: ListTeamMemberBookingProfilesSecurity;
}


export class ListTeamMemberBookingProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTeamMemberBookingProfilesResponse?: shared.ListTeamMemberBookingProfilesResponse;

  @Metadata()
  statusCode: number;
}
