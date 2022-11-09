import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
