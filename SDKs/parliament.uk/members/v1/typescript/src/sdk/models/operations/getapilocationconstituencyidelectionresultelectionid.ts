import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationConstituencyIdElectionResultElectionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=electionId" })
  electionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdElectionResultElectionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiLocationConstituencyIdElectionResultElectionIdPathParams;
}


export class GetApiLocationConstituencyIdElectionResultElectionIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  electionResultItem?: shared.ElectionResultItem;

  @Metadata()
  statusCode: number;
}
