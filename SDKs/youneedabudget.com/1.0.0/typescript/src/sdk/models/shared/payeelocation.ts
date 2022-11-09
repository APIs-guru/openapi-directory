import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayeeLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=latitude" })
  latitude: string;

  @Metadata({ data: "json, name=longitude" })
  longitude: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId: string;
}
