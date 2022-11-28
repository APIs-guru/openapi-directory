import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContract } from "./songforapicontract";



export class SongInAlbumForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discNumber" })
  discNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=song" })
  song?: SongForApiContract;

  @SpeakeasyMetadata({ data: "json, name=trackNumber" })
  trackNumber?: number;
}
