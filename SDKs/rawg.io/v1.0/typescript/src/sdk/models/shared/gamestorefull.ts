import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GameStoreFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=game_id" })
  gameId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=store_id" })
  storeId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
