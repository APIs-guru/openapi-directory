import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta19 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}
