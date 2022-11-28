import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SongInListForApiContract } from "./songinlistforapicontract";



export class PartialFindResultSongInListForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SongInListForApiContract })
  items?: SongInListForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
