import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Party } from "./party";


export class ElectionCandidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberId" })
  memberId?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=party" })
  party?: Party;

  @Metadata({ data: "json, name=rankOrder" })
  rankOrder?: number;

  @Metadata({ data: "json, name=resultChange" })
  resultChange?: string;

  @Metadata({ data: "json, name=voteShare" })
  voteShare?: number;

  @Metadata({ data: "json, name=votes" })
  votes?: number;
}
