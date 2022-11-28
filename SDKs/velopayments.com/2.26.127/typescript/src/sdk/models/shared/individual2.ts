import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Individual2Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: any;
}


export class Individual2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateOfBirth" })
  dateOfBirth: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: any;

  @SpeakeasyMetadata({ data: "json, name=nationalIdentification" })
  nationalIdentification?: string;
}
