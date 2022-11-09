import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { Address } from "./address";


export class Addresses extends SpeakeasyBase {
  @Metadata({ data: "json, name=mailing" })
  mailing?: Address;

  @Metadata({ data: "json, name=physical" })
  physical?: Address;
}
