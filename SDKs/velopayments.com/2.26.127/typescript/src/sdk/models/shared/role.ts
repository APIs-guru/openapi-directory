import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Role extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
