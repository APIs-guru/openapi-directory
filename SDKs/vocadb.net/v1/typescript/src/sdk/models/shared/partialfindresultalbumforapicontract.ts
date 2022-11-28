import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlbumForApiContract } from "./albumforapicontract";



export class PartialFindResultAlbumForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: AlbumForApiContract })
  items?: AlbumForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
