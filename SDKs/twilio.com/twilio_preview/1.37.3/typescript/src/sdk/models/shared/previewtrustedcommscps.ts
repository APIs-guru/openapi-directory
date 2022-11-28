import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewTrustedCommsCps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cps_url" })
  cpsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
