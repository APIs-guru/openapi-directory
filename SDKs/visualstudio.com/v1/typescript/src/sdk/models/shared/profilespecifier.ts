import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProfileSpecifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=oid" })
  oid?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=tid" })
  tid?: string;
}
