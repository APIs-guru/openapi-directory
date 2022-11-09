import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MemberForDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Constituency" })
  constituency?: string;

  @Metadata({ data: "json, name=ListAs" })
  listAs?: string;

  @Metadata({ data: "json, name=MnisId" })
  mnisId?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Party" })
  party?: string;

  @Metadata({ data: "json, name=PartyColour" })
  partyColour?: string;

  @Metadata({ data: "json, name=PartyId" })
  partyId?: number;

  @Metadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=PimsId" })
  pimsId?: number;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
