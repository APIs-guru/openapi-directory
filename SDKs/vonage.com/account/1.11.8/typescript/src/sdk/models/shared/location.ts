import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressWithTimeZone } from "./addresswithtimezone";



export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressWithTimeZone;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
