import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PartyViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColour" })
  backgroundColour?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
