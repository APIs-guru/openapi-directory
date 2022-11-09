import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RatedSongForUserForApiContract } from "./ratedsongforuserforapicontract";


export class PartialFindResultRatedSongForUserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RatedSongForUserForApiContract })
  items?: RatedSongForUserForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
