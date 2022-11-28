import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
