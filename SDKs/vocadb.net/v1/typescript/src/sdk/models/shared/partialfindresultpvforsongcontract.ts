import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PvForSongContract } from "./pvforsongcontract";


export class PartialFindResultPvForSongContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PvForSongContract })
  items?: PvForSongContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
