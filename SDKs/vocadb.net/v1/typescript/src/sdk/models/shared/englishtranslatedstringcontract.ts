import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnglishTranslatedStringContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=english" })
  english?: string;

  @Metadata({ data: "json, name=original" })
  original?: string;
}
