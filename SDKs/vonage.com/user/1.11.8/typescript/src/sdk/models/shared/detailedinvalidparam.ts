import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetailedInvalidParam extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
