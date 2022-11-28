import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateIndividual2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateOfBirth" })
  dateOfBirth: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: any;

  @SpeakeasyMetadata({ data: "json, name=nationalIdentification" })
  nationalIdentification?: string;
}
