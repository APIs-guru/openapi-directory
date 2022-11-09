import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PersonFollowEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: Map<string, any>;
}


export class PersonFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: PersonFollowEmbedded;

  @Metadata({ data: "json, name=person_id" })
  personId?: number;
}
