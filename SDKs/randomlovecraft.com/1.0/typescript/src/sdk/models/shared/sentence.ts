import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Book } from "./book";



export class Sentence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=book" })
  book?: Book;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sentence" })
  sentence?: string;
}
