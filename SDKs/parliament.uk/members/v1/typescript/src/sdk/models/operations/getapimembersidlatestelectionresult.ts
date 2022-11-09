import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdLatestElectionResultPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdLatestElectionResultRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdLatestElectionResultPathParams;
}


export class GetApiMembersIdLatestElectionResultResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  electionResultItem?: shared.ElectionResultItem;

  @Metadata()
  statusCode: number;
}
