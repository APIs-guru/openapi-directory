import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Post extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
