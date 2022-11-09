import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SongForApiContract } from "./songforapicontract";


export class PartialFindResultSongForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SongForApiContract })
  items?: SongForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
