import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressWithTimeZone } from "./addresswithtimezone";


export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: AddressWithTimeZone;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
