import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class Addresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mailing" })
  mailing?: Address;

  @SpeakeasyMetadata({ data: "json, name=physical" })
  physical?: Address;
}
