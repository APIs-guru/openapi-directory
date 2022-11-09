import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LanguageDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=text" })
  text: string;
}
