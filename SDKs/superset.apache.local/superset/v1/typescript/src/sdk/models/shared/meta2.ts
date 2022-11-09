import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
