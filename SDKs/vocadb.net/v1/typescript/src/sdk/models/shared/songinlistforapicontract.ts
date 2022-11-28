import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContract } from "./songforapicontract";



export class SongInListForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=song" })
  song?: SongForApiContract;
}
