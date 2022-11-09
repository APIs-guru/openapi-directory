import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Book } from "./book";


export class Sentence extends SpeakeasyBase {
  @Metadata({ data: "json, name=book" })
  book?: Book;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=sentence" })
  sentence?: string;
}
