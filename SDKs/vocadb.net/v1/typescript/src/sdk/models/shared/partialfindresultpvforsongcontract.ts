import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PvForSongContract } from "./pvforsongcontract";



export class PartialFindResultPvForSongContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PvForSongContract })
  items?: PvForSongContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
