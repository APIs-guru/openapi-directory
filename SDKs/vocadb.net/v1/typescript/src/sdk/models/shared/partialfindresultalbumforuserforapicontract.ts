import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlbumForUserForApiContract } from "./albumforuserforapicontract";



export class PartialFindResultAlbumForUserForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: AlbumForUserForApiContract })
  items?: AlbumForUserForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
