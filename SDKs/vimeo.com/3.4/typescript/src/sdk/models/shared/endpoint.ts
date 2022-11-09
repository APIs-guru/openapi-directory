import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=methods" })
  methods: string[];

  @Metadata({ data: "json, name=path" })
  path: string;
}
