import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SongForApiContract } from "./songforapicontract";


export class SongInAlbumForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=discNumber" })
  discNumber?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=song" })
  song?: SongForApiContract;

  @Metadata({ data: "json, name=trackNumber" })
  trackNumber?: number;
}
