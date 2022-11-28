import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
