import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistForUserForApiContract } from "./artistforuserforapicontract";



export class PartialFindResultArtistForUserForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ArtistForUserForApiContract })
  items?: ArtistForUserForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
