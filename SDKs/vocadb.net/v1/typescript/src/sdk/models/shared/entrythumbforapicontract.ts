import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EntryThumbForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mime" })
  mime?: string;

  @SpeakeasyMetadata({ data: "json, name=urlOriginal" })
  urlOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=urlSmallThumb" })
  urlSmallThumb?: string;

  @SpeakeasyMetadata({ data: "json, name=urlThumb" })
  urlThumb?: string;

  @SpeakeasyMetadata({ data: "json, name=urlTinyThumb" })
  urlTinyThumb?: string;
}
