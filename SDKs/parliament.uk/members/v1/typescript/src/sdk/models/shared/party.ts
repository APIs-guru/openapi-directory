import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Party extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=backgroundColour" })
  backgroundColour?: string;

  @Metadata({ data: "json, name=foregroundColour" })
  foregroundColour?: string;

  @Metadata({ data: "json, name=governmentType" })
  governmentType?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isIndependentParty" })
  isIndependentParty?: boolean;

  @Metadata({ data: "json, name=isLordsMainParty" })
  isLordsMainParty?: boolean;

  @Metadata({ data: "json, name=isLordsSpiritualParty" })
  isLordsSpiritualParty?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
