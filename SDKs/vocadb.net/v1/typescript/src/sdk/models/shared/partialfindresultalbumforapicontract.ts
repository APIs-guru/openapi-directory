import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlbumForApiContract } from "./albumforapicontract";


export class PartialFindResultAlbumForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.AlbumForApiContract })
  items?: AlbumForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
