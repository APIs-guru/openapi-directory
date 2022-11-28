import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Individual extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateOfBirth" })
  dateOfBirth: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: any;

  @SpeakeasyMetadata({ data: "json, name=nationalIdentification" })
  nationalIdentification?: string;
}


export class IndividualInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: any;
}
