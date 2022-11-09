import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SongForApiContract } from "./songforapicontract";


export class SongInListForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=order" })
  order?: number;

  @Metadata({ data: "json, name=song" })
  song?: SongForApiContract;
}
