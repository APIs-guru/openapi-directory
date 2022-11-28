import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Party extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundColour" })
  backgroundColour?: string;

  @SpeakeasyMetadata({ data: "json, name=foregroundColour" })
  foregroundColour?: string;

  @SpeakeasyMetadata({ data: "json, name=governmentType" })
  governmentType?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isIndependentParty" })
  isIndependentParty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLordsMainParty" })
  isLordsMainParty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLordsSpiritualParty" })
  isLordsSpiritualParty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
