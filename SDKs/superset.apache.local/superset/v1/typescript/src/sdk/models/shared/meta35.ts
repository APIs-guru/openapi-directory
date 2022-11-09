import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta35 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
