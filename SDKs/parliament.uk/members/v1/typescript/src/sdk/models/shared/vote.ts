import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Vote extends SpeakeasyBase {
  @Metadata({ data: "json, name=actedAsTeller" })
  actedAsTeller?: boolean;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=divisionNumber" })
  divisionNumber?: number;

  @Metadata({ data: "json, name=house" })
  house?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=inAffirmativeLobby" })
  inAffirmativeLobby?: boolean;

  @Metadata({ data: "json, name=numberAgainst" })
  numberAgainst?: number;

  @Metadata({ data: "json, name=numberInFavour" })
  numberInFavour?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
