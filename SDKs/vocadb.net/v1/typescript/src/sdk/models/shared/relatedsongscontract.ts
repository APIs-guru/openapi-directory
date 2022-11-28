import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContract } from "./songforapicontract";



export class RelatedSongsContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artistMatches", elemType: SongForApiContract })
  artistMatches?: SongForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=likeMatches", elemType: SongForApiContract })
  likeMatches?: SongForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=tagMatches", elemType: SongForApiContract })
  tagMatches?: SongForApiContract[];
}
