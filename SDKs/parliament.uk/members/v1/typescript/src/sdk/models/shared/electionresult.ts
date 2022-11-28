import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElectionCandidate } from "./electioncandidate";
import { Party } from "./party";



export class ElectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates", elemType: ElectionCandidate })
  candidates?: ElectionCandidate[];

  @SpeakeasyMetadata({ data: "json, name=constituencyName" })
  constituencyName?: string;

  @SpeakeasyMetadata({ data: "json, name=electionDate" })
  electionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=electionId" })
  electionId?: number;

  @SpeakeasyMetadata({ data: "json, name=electionTitle" })
  electionTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=electorate" })
  electorate?: number;

  @SpeakeasyMetadata({ data: "json, name=isGeneralElection" })
  isGeneralElection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isNotional" })
  isNotional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=majority" })
  majority?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=turnout" })
  turnout?: number;

  @SpeakeasyMetadata({ data: "json, name=winningParty" })
  winningParty?: Party;
}
