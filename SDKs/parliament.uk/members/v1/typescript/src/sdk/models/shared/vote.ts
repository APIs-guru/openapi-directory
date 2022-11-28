import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Vote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actedAsTeller" })
  actedAsTeller?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=divisionNumber" })
  divisionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inAffirmativeLobby" })
  inAffirmativeLobby?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numberAgainst" })
  numberAgainst?: number;

  @SpeakeasyMetadata({ data: "json, name=numberInFavour" })
  numberInFavour?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
