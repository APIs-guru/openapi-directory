import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationConstituencyIdElectionResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdElectionResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiLocationConstituencyIdElectionResultsPathParams;
}


export class GetApiLocationConstituencyIdElectionResultsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  electionResultListItem?: shared.ElectionResultListItem;

  @Metadata()
  statusCode: number;
}
