import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayorCreateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
