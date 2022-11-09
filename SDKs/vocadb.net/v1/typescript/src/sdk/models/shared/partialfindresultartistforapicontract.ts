import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtistForApiContract } from "./artistforapicontract";


export class PartialFindResultArtistForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ArtistForApiContract })
  items?: ArtistForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
