import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RatedSongForUserForApiContract } from "./ratedsongforuserforapicontract";



export class PartialFindResultRatedSongForUserForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RatedSongForUserForApiContract })
  items?: RatedSongForUserForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
