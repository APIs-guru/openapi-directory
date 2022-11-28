import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LanguageDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
