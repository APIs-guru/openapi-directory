import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PartyViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColour" })
  backgroundColour?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
