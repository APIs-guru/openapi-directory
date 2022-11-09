import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Book extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=year" })
  year?: string;
}
