import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PersonFollowEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Map<string, any>;
}


export class PersonFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: PersonFollowEmbedded;

  @SpeakeasyMetadata({ data: "json, name=person_id" })
  personId?: number;
}
