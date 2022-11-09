import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta18 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=last_name" })
  lastName: string;
}
