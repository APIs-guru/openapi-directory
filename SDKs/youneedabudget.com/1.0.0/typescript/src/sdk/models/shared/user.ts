import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
