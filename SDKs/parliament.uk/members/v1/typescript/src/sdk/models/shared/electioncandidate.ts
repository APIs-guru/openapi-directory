import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Party } from "./party";



export class ElectionCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberId" })
  memberId?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: Party;

  @SpeakeasyMetadata({ data: "json, name=rankOrder" })
  rankOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=resultChange" })
  resultChange?: string;

  @SpeakeasyMetadata({ data: "json, name=voteShare" })
  voteShare?: number;

  @SpeakeasyMetadata({ data: "json, name=votes" })
  votes?: number;
}
