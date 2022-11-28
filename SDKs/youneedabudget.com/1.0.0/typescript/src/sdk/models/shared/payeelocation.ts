import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayeeLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: string;

  @SpeakeasyMetadata({ data: "json, name=payee_id" })
  payeeId: string;
}
