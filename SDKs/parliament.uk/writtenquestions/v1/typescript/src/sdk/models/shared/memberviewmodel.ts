import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemberViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=listAs" })
  listAs?: string;

  @SpeakeasyMetadata({ data: "json, name=memberFrom" })
  memberFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=partyAbbreviation" })
  partyAbbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=partyColour" })
  partyColour?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
