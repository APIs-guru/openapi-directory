import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLocationConstituencyIdElectionResultElectionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=electionId" })
  electionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdElectionResultElectionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiLocationConstituencyIdElectionResultElectionIdPathParams;
}


export class GetApiLocationConstituencyIdElectionResultElectionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  electionResultItem?: shared.ElectionResultItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
