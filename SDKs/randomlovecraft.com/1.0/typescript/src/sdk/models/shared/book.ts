import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Book extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}
