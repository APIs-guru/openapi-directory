import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SongForApiContract } from "./songforapicontract";
import { SongForApiContract } from "./songforapicontract";
import { SongForApiContract } from "./songforapicontract";


export class RelatedSongsContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=artistMatches", elemType: shared.SongForApiContract })
  artistMatches?: SongForApiContract[];

  @Metadata({ data: "json, name=likeMatches", elemType: shared.SongForApiContract })
  likeMatches?: SongForApiContract[];

  @Metadata({ data: "json, name=tagMatches", elemType: shared.SongForApiContract })
  tagMatches?: SongForApiContract[];
}
