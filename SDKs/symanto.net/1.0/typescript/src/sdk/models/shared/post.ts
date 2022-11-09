import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Post extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=text" })
  text: string;
}
