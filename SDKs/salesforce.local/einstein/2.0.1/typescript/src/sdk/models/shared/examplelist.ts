import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Example } from "./example";


export class ExampleList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Example })
  data?: Example[];

  @Metadata({ data: "json, name=object" })
  object?: string;
}
