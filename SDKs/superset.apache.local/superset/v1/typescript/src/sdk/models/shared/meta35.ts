import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta35 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
