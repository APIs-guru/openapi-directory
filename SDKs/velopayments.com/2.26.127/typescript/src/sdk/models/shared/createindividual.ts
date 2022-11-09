import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateIndividual extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateOfBirth" })
  dateOfBirth: Date;

  @Metadata({ data: "json, name=name" })
  name: any;

  @Metadata({ data: "json, name=nationalIdentification" })
  nationalIdentification?: string;
}
