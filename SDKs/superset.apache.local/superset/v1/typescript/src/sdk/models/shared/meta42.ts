import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta42 extends SpeakeasyBase {
  @Metadata({ data: "json, name=username" })
  username: string;
}
