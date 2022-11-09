import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
