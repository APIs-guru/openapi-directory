import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
