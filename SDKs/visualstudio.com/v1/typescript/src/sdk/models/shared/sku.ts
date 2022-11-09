import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Sku extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tier" })
  tier?: string;
}
