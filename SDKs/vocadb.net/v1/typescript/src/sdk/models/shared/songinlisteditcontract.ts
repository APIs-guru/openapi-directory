import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContractInput } from "./songforapicontract";



export class SongInListEditContractInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=song" })
  song?: SongForApiContractInput;

  @SpeakeasyMetadata({ data: "json, name=songInListId" })
  songInListId?: number;
}
