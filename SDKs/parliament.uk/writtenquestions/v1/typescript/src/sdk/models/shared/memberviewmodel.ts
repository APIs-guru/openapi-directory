import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MemberViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=listAs" })
  listAs?: string;

  @Metadata({ data: "json, name=memberFrom" })
  memberFrom?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=partyAbbreviation" })
  partyAbbreviation?: string;

  @Metadata({ data: "json, name=partyColour" })
  partyColour?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
