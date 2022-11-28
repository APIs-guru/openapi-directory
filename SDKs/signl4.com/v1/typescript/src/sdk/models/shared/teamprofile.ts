import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
