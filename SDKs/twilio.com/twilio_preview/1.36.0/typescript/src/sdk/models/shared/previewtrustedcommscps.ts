import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewTrustedCommsCps extends SpeakeasyBase {
  @Metadata({ data: "json, name=cps_url" })
  cpsUrl?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
