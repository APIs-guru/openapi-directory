import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OauthV1Certs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
