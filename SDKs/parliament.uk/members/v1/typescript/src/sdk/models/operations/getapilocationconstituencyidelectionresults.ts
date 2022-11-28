import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLocationConstituencyIdElectionResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdElectionResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiLocationConstituencyIdElectionResultsPathParams;
}


export class GetApiLocationConstituencyIdElectionResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  electionResultListItem?: shared.ElectionResultListItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
