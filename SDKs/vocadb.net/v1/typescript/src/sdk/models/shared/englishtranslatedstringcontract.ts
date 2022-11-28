import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnglishTranslatedStringContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=english" })
  english?: string;

  @SpeakeasyMetadata({ data: "json, name=original" })
  original?: string;
}
