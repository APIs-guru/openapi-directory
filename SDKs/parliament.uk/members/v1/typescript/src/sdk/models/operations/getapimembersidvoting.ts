import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdVotingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdVotingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=house" })
  house: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdVotingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdVotingPathParams;

  @Metadata()
  queryParams: GetApiMembersIdVotingQueryParams;
}


export class GetApiMembersIdVotingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voteMembersServiceSearchResult?: shared.VoteMembersServiceSearchResult;
}
