import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdVotingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdVotingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=house" })
  house: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdVotingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdVotingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiMembersIdVotingQueryParams;
}


export class GetApiMembersIdVotingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voteMembersServiceSearchResult?: shared.VoteMembersServiceSearchResult;
}
