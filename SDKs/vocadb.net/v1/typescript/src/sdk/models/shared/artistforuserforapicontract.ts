import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtistForApiContract } from "./artistforapicontract";


export class ArtistForUserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=artist" })
  artist?: ArtistForApiContract;
}
