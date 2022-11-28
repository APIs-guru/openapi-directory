import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayorLogoRequestLogo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=logo" })
  logo: string;
}


export class PayorLogoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  logo?: PayorLogoRequestLogo;
}
