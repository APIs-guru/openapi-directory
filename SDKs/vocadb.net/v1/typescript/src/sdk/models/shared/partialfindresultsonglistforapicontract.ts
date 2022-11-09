import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SongListForApiContract } from "./songlistforapicontract";


export class PartialFindResultSongListForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SongListForApiContract })
  items?: SongListForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
