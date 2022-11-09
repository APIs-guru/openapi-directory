import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GameStoreFull extends SpeakeasyBase {
  @Metadata({ data: "json, name=game_id" })
  gameId?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=store_id" })
  storeId?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
