import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdContributionSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdContributionSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdContributionSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdContributionSummaryPathParams;

  @Metadata()
  queryParams: GetApiMembersIdContributionSummaryQueryParams;
}


export class GetApiMembersIdContributionSummaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  debateContributionMembersServiceSearchResult?: shared.DebateContributionMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
