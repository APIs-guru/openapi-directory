import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistForApiContract } from "./artistforapicontract";



export class PartialFindResultArtistForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ArtistForApiContract })
  items?: ArtistForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
