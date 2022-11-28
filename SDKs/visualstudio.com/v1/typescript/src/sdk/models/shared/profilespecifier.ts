import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProfileSpecifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oid" })
  oid?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=tid" })
  tid?: string;
}
