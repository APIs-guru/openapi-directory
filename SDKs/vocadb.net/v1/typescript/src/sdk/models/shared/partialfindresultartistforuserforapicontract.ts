import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtistForUserForApiContract } from "./artistforuserforapicontract";


export class PartialFindResultArtistForUserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ArtistForUserForApiContract })
  items?: ArtistForUserForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
