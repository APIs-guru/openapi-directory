import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Individual extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateOfBirth" })
  dateOfBirth: string;

  @Metadata({ data: "json, name=name" })
  name: any;

  @Metadata({ data: "json, name=nationalIdentification" })
  nationalIdentification?: string;
}
