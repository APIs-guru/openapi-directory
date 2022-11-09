import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ElectionCandidate } from "./electioncandidate";
import { Party } from "./party";


export class ElectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates", elemType: shared.ElectionCandidate })
  candidates?: ElectionCandidate[];

  @Metadata({ data: "json, name=constituencyName" })
  constituencyName?: string;

  @Metadata({ data: "json, name=electionDate" })
  electionDate?: Date;

  @Metadata({ data: "json, name=electionId" })
  electionId?: number;

  @Metadata({ data: "json, name=electionTitle" })
  electionTitle?: string;

  @Metadata({ data: "json, name=electorate" })
  electorate?: number;

  @Metadata({ data: "json, name=isGeneralElection" })
  isGeneralElection?: boolean;

  @Metadata({ data: "json, name=isNotional" })
  isNotional?: boolean;

  @Metadata({ data: "json, name=majority" })
  majority?: number;

  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=turnout" })
  turnout?: number;

  @Metadata({ data: "json, name=winningParty" })
  winningParty?: Party;
}
