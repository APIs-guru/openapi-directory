import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SongListForApiContract } from "./songlistforapicontract";



export class PartialFindResultSongListForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SongListForApiContract })
  items?: SongListForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
