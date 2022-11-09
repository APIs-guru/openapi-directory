import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
