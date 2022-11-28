import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemberForDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Constituency" })
  constituency?: string;

  @SpeakeasyMetadata({ data: "json, name=ListAs" })
  listAs?: string;

  @SpeakeasyMetadata({ data: "json, name=MnisId" })
  mnisId?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyColour" })
  partyColour?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyId" })
  partyId?: number;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PimsId" })
  pimsId?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
