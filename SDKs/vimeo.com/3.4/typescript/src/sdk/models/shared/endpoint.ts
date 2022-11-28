import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methods" })
  methods: string[];

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
