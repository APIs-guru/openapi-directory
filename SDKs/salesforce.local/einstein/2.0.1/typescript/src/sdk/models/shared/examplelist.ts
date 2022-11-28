import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Example } from "./example";



export class ExampleList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Example })
  data?: Example[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
