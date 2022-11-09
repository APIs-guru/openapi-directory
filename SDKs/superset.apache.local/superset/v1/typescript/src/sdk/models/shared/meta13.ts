import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta13 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_name" })
  lastName: string;
}
