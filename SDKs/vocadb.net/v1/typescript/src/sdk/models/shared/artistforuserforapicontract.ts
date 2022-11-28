import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistForApiContract } from "./artistforapicontract";



export class ArtistForUserForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: ArtistForApiContract;
}
