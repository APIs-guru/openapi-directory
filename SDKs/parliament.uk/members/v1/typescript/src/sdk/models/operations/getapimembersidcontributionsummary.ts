import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdContributionSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdContributionSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdContributionSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdContributionSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiMembersIdContributionSummaryQueryParams;
}


export class GetApiMembersIdContributionSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  debateContributionMembersServiceSearchResult?: shared.DebateContributionMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
