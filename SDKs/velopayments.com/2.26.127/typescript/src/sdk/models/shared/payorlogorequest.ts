import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayorLogoRequestLogo extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=logo" })
  logo: string;
}


export class PayorLogoRequest extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  logo?: PayorLogoRequestLogo;
}
