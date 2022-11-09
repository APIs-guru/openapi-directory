import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EntryThumbForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=mime" })
  mime?: string;

  @Metadata({ data: "json, name=urlOriginal" })
  urlOriginal?: string;

  @Metadata({ data: "json, name=urlSmallThumb" })
  urlSmallThumb?: string;

  @Metadata({ data: "json, name=urlThumb" })
  urlThumb?: string;

  @Metadata({ data: "json, name=urlTinyThumb" })
  urlTinyThumb?: string;
}
